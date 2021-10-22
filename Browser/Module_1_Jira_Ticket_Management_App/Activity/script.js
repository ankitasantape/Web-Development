var uid = new ShortUniqueId();
// console.log(uid());

// variables
let colors = ["pink", "blue", "green", "black"];
let defaultColor = "black";
let cFilter = "";
let locked = false;
let deleteMode = false; 

// elements

let input = document.querySelector(".input-container-text");
let mainContainer = document.querySelector(".main-container");
let colorContainer = document.querySelector(".color-group-container");
let lockContainer = document.querySelector(".lock-container");
let unlockContainer = document.querySelector(".unlock-container");
let plusContainer = document.querySelector(".plus-container");
let deleteContainer = document.querySelector(".cross-container");
let deletebtn = document.querySelector(".cross-container");
let colorChooser = document.querySelector(".color-container");
let colorPicker = document.querySelectorAll(".color-picker");
let modal = document.querySelector(".modal-container");

// event listener
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && input.value){
        let task = input.value;
        // console.log("task is ", task, "color ", cColor);
        let id = uid();
        modal.style.display = "none";
        createTask(id, task, true);
        input.value = "";   
    }   
})
// lock task
lockContainer.addEventListener("click", function (e) {
    let numberOFElements = document.querySelectorAll(".task-main-container>div")
    for (let i = 0; i < numberOFElements.length; i++) {
        numberOFElements[i].contentEditable = false;
    }
    // ui match
    lockContainer.classList.add("active");
    unlockContainer.classList.remove("active");
})
// unlock task
unlockContainer.addEventListener("click", function (e) {
  let  numberOFElements = document.querySelectorAll(".task-main-container>div")
    for (let i = 0; i < numberOFElements.length; i++) {
        numberOFElements[i].contentEditable = true;
    }
    lockContainer.classList.remove("active");
    unlockContainer.classList.add("active");
})

// add new tasks 
plusContainer.addEventListener("click", (e) => {
    modal.style.display = "flex";
})

// delete tasks
deleteContainer.addEventListener("click", function (e) {
    deleteMode = !deleteMode;
    if (deleteMode) {
        deleteContainer.classList.add("active")
    } else {
        deleteContainer.classList.remove("active")

    }
})
function createTask(id, task, flag, color){
      let taskContainer = document.createElement("div");
      taskContainer.setAttribute("class", "task-container");
      taskContainer.innerHTML = `
                    <div class="task-header ${color?color:defaultColor}"></div>
                    <div class="task-main-container">
                        <h3 class="task-id">#${id}</h3>
                        <div class="text" contenteditable="false">${task}</div>
                        <div class="lock-container"><i class="fas fa-lock"></i></div>
                    </div>
      `;
    mainContainer.appendChild(taskContainer);
    // addEventListener for color changes
    let taskHeader = taskContainer.querySelector(".task-header");
    let inputTask = taskContainer.querySelector(".task-main-container>div");
    // functionality -> color change, delete
    // local storage
    // color
    let nextColor;
    // ******************color change*******************
    taskHeader.addEventListener("click", (e) => {
        // console.log("id", id);
        // console.log("color change logic");
        // class -> change
        // get all the classes on an element
        // console.log(taskHeader.classList);
        let cColor = taskHeader.classList[1];
        
        // let cColor = window
        //       .getComputedStyle(taskHeader)
        //       .backgroundColor; 
        // next color
        // element.style.backgroungColor = nextColor;
        
        
        // console.log("cColor", cColor);
        let idx = colors.indexOf(cColor);
        let nextIdx = (idx + 1) % 4;
        nextColor = colors[nextIdx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor);

        // id -> localstorage search -> tell -> color
        // console.log("parent", taskHeader.parentNode);

        // console.log("taskContainer", taskHeader.parentNode.children[1]);
        // console.log("idwalaelem ", taskHeader.parentNode.children[1].children[0]);
        let idWalaElem = taskHeader.parentNode.children[1].children[0];
        let id = idWalaElem.textContent;
        id = id.split("#")[1];
        // console.log("id", id);
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString);
        // (id:"", task:)
        for(let i = 0; i < tasksArr.length; i++){
            if(tasksArr[i].id == id){
                tasksArr[i].color = nextColor;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    })

    // ************delete******************* 
    taskContainer.addEventListener("click", (e) => {
        if(deleteMode == true){
            // delete -> ui, storage
            let idWalaElem = taskHeader.parentNode.children[1].children[0];
            let id = idWalaElem.textContent;
            id = id.split("#")[1];

            let tasksString = localStorage.getItem("tasks");
            
            let tasksArr = JSON.parse(tasksString);
            // console.log("task arr "+tasksArr);
            for(let i = 0; i < tasksArr.length; i++){
                // console.log("taskArr[i].id "+tasksArr[i].id +" id "+ id);
                if(tasksArr[i].id == id){
                //    console.log(tasksArr.splice(i, 1));
                //    console.log(tasksArr);
                   tasksArr.splice(i, 1)
                   localStorage.setItem("tasks", JSON.stringify(tasksArr));
                   break;
                }
            }
            taskContainer.remove();
        }
    })

    //
    inputTask.addEventListener("blur", (e) => {
        let content = inputTask.textContent;
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString);
        for(let i = 0; i < tasksArr.length; i++){
            if( tasksArr[i].id == id){
                tasksArr[i].task = content;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    })

    // local storage add
    if( flag == true){
        let taskString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(taskString) || [];
        let taskObject = {
            id: id,
            task: task,
            color: defaultColor
        }
        // 1 new task
        tasksArr.push(taskObject);
        // set 
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    }
    // set 
    defaultColor = "black";
    // unhide modal
    // appear on plus click
}

// filtering
colorContainer.addEventListener("click", (e) => {
    let element = e.target;
    // console.log("e.target", element);  // element -> <div class="color blue"></div>
    // bubbling -> only selected element will appear
    if (element != colorContainer){
        // console.log(element, " ", colorContainer)
        // element -> <div class="color blue"></div>
        // classList[color blue] -> element.classList[0] = color, element.classList[1] = blue
        let filteredCardColor = element.classList[1];
        filterCards(filteredCardColor);
    }
})

// modal color chooser
colorChooser.addEventListener("click", (e) => {
    let element = e.target;
    // console.log("e.target", element);  // element -> <div class="color blue"></div>
    // bubbling -> only selected element will appear
    if (element != colorChooser){
        // console.log(element, " ", colorContainer)
        // element -> <div class="color blue"></div>
        // classList[color blue] -> element.classList[0] = color, element.classList[1] = blue
        let filteredCardColor = element.classList[1];
        defaultColor = filteredCardColor;
        // border change
        for(let i = 0; i < colorPicker.length; i++){
            // remove from all elements
             colorPicker[i].classList.remove("selected");
        }
        // add 
        element.classList.add("selected");
        
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
     console.log(allTaskCards);
    // if we single click on task -> only requested filter's task will show  
     if (cFilter != filterColor){
         console.log("cfilter: "+cFilter +"filterColor: "+ filterColor);
         for (let i = 0; i < allTaskCards.length; i++){
            //  header color ->
            let taskHeader = allTaskCards[i].querySelector(".task-header");
            // <div class="task-header pink"></div>
            let taskColor = taskHeader.classList[1]; // 
            if (taskColor == filterColor){
                // show 
                allTaskCards[i].style.display = "block";
            } else {
                // hide
                allTaskCards[i].style.display = "none";
            }
         }
         cFilter = filterColor;
     } else {  // if double click on same filter it will show all the tasks of all filters
        //  console.log(cFilter +" "+ filterColor);
         cFilter = "";
         for(let i = 0; i < allTaskCards.length; i++) {
            allTaskCards[i].style.display = "block";
         }
     }
}

// check if any of the tasks are in local storage
// bring it to ui
(function () {
    // local storage
    // get it to ui
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++){
        let { id, task, color } = tasks[i];
        createTask(id, task, false, color);
    }
    modal.style.display = "none";
})();


// Intro to local storage
// localStorage.setItem("todo", "Hello world");
// localStorage.setItem("todo tomorrow", "Hello again");
// localStorage.setItem("todo yesterday", "Hello yesterdaa");
// let length = localStorage.length;
// console.log("length ", length);
// localStorage.removeItem("todo");
// localStorage.clear();
// let item = localStorage.getItem("todo");
// console.log("Item ", item);
