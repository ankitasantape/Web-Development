
let modalBtn = document.querySelector(".modal-btn");
let modal = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", (e) => {
    modal.classList.add("open-modal");
})
closeBtn.addEventListener("click", (e) => {
    modal.classList.remove("open-modal");
})

