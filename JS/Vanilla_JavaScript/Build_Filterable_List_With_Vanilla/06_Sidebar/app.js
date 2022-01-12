let sidebartogglebtn = document.querySelector(".sidebar-toggle");
let closebtn = document.querySelector(".close-btn");
let sidebar = document.querySelector(".sidebar");

sidebartogglebtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("show-sidebar");    
})

closebtn.addEventListener("click", (e) => {
    sidebar.classList.remove("show-sidebar");  
 })