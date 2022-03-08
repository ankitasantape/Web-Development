let plus = document.querySelector("#plus");
let imgListContainer = document.querySelector(".img-list-container");
let imgShowContainer = document.querySelector(".img-show-container");

plus.addEventListener("click", function () {
    let imgLink = prompt("please enter img url");
    if (imgLink == null || imgLink == "") {
        alert("Please enter img src");
        return;
    }
    addImageToListandShow(imgLink)
    //    add image to List & add Image to show container
})
function addImageToListandShow(imgLink) {
    // img list
    let previewImg = document.createElement("img");
    previewImg.setAttribute("src", imgLink)
    previewImg.setAttribute("class", "img_preview");
    // last me add karta hai 
    imgListContainer.appendChild(previewImg);
    // show image
    setShowImage(imgLink);
    // 
    handleImageFunctionality(previewImg);

}

// get imageLink from image-preview 
function handleImageFunctionality(previewImg){
    previewImg.addEventListener("click", function (event) {
         let imgLink = previewImg.getAttribute("src"); // O(1) me image ki link aa jayegi
        //  console.log(imgLink);
         setShowImage(imgLink); 
    });
}

// this code will show image on img-show-container
function setShowImage(imgLink){
    let innerHtmlBlock =
    `<img class="final_image" src=${imgLink} alt=""> 
    <span class="material-icons">keyboard_double_arrow_right</span>`
    // img show -> replace 
    imgShowContainer.innerHTML = innerHtmlBlock;
}