var uid = new ShortUniqueId();
// console.log(uid());
let input = document.querySelector("input");
let colors = ["pink", "blue", "green", "black"];
let cColor = colors[0];
let mainContainer = document.querySelector(".main-container");
let i = 0;
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        let task = input.value;
        console.log("task is ", task, "color ", cColor);
        
        createTicket(task, cColor);
        i++;
        i = i % colors.length;
        
        cColor = colors[i];
        
    }
    
})

function createTicket(task, cColor){
      let taskContainer = document.createElement("div");
      taskContainer.setAttribute("class", "task-container");
      taskContainer.innerHTML = `
                    <div class="task-header ${cColor}"></div>
                    <div class="task-main-container">
                        <h3 class="task-id">#${uid()}</h3>
                        <div class="text">${task}</div>
                    </div>
      `;
      mainContainer.appendChild(taskContainer);
}