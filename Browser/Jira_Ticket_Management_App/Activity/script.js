var uid = new ShortUniqueId();
// console.log(uid());
let input = document.querySelector("input");
let colors = ["pink", "blue", "green", "black"];
let defaultColor = "black";
let mainContainer = document.querySelector(".main-container");
let cFilter = "";
let deleteTask = false; 
let deletebtn = document.querySelector(".cross-container");
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && input.value){
        let task = input.value;
        // console.log("task is ", task, "color ", cColor);
        let id = uid();
        createTask(id, task);
        input.value = "";
        
    }
    
})

function createTask(id, task){
      let taskContainer = document.createElement("div");
      taskContainer.setAttribute("class", "task-container");
      taskContainer.innerHTML = `
                    <div class="task-header ${defaultColor}"></div>
                    <div class="task-main-container">
                        <h3 class="task-id">#${id}</h3>
                        <div class="text" contenteditable="false">${task}</div>
                    </div>
      `;
    mainContainer.appendChild(taskContainer);
    // addEventListener for color changes
    let taskHeader = taskContainer.querySelector(".task-header");
    taskHeader.addEventListener("click", (e) => {
        // class -> change
        // get all the classes on an element
        console.log(taskHeader.classList);
        let cColor = taskHeader.classList[1];

        // let cColor = window.getComputedStyle(taskHeader).backgroundColor; 
        // next color
        // element.style.backgroungColor = nextColor;
        console.log("cColor", cColor);
        let idx = colors.indexOf(cColor);
        let nextIdx = (idx + 1) % 4;
        let nextColor = colors[nextIdx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor);
    })

    // handleDeleteContainer(taskContainer);
    // deleteTask = !deleteTask;
}

// filtering
let colorContainer = document.querySelector(".color-group-container");
colorContainer.addEventListener("click", (e) => {
    let element = e.target;
    console.log("e.target", element);
    // bubbling only selected element will appear
    if (element != colorContainer){
        console.log(element, " ", colorContainer)
        let filteredCardColor = element.classList[1];
        filterCards(filteredCardColor);
    }
})

// instead of this used bubbling concept
// console.log(colorBtns);
// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener("click", function () {
//         let filteredCardColor = colorBtns[i].classList[1];
//         console.log(filteredCardColor);
//         filterCards(filteredCardColor);
//     })
// }

function filterCards(filterColor){
     let allTaskCards = document.querySelectorAll(".task-container");
     if (cFilter != filterColor){
         for (let i = 0; i < allTaskCards.length; i++){
            //  header color ->
            let taskHeader = allTaskCards[i].querySelector(".task-header");
            let taskColor = taskHeader.classList[1];
            if (taskColor == filterColor){
                // show 
                allTaskCards[i].style.display = "block";
            } else {
                // hide
                allTaskCards[i].style.display = "none";
            }
         }
         cFilter = filterColor;
     } else {
         cFilter = "";
         for(let i = 0; i < allTaskCards.length; i++) {
            allTaskCards[i].style.display = "block";
         }
     }
}







// deletebtn.addEventListener("click", (e) => {
//     if(deleteTask == false){
//         deletebtn.style.backgroundColor = "lightcoral";
//     } else {
//         deletebtn.style.backgroundColor = "lightgray";
//     }
    
//     // deleteTask = !deleteTask;
// });

// function handleDeleteContainer(taskContainer){
//     taskContainer.addEventListener("click", (e) => {
//         if(deleteTask == true){
//             let elem = taskContainer.querySelector(".task-id");
//             let tobeDeletedId = elem.innerText.slice(1);
//             console.log(tobeDeletedId); 
//             taskContainer.remove();
//         }
//     })
//     deleteTask = !deleteTask;
// }