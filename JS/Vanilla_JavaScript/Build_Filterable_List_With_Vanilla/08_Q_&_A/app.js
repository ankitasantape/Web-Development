
let minusBtn = document.querySelector(".minus-icon");
let queText = document.querySelector(".question-text");

let questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    let plusBtn = question.querySelector(".plus-icon");

    plusBtn.addEventListener("click", (e) => {
        
        questions.forEach(function (item){
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        
        question.classList.toggle("show-text");
    });
});