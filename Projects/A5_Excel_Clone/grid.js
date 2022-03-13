let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0;i < rows;i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}

for (let i = 0;i < cols;i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressRow);
}

for (let i = 0;i < rows;i++) {
    // one by one row ki div banayenge then us row ki div me as col -> cell div ko attach append krenge
    // row1[[col1], [col2], [col2].....] -> row1[cell1[i,j], cell2[i,j], cell3[i,j].....]
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for (let j = 0;j < cols;j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("spellcheck", "false");

        // Attributes for cell and storage identification
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);

        rowCont.appendChild(cell);
        // add listener to show address of cell on address bar
        addListenerForAddressBarDisplay(cell, i, j);
    }
    cellsCont.appendChild(rowCont);
}

function addListenerForAddressBarDisplay(cell, i, j) {
    cell.addEventListener("click", (e) => {
        let rowID = i+1;
        let colID = String.fromCharCode(65 + j);
        addressBar.value = `${colID}${rowID}`;
    })
}