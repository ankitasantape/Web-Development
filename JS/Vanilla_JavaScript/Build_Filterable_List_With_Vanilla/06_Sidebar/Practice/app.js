let togglebtn = document.querySelector(".sidebar-toggle");
let closebtn = document.querySelector(".cross-btn");
let sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener("click", (e) => {
     console.log("helloe");
     sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", (e) => {
    sidebar.classList.remove("show-sidebar");
});