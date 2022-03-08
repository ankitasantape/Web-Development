// Applying respective property to its corresponding cells
// Concept used -> two way binding -> har ek cell ke liye data change ho rhi hai to wo data ko storage me bhi store krke rkhni hai, aur jb kabhi bhi user wo cell 
// pe click karega same property ui pe aur menu bar pe display honi chahiye 
// Two-Way Binding
//   - Data will change in Storage
//   - Property will active on UI
// Part-2 -> Properties
// User jis-jis bhi cell pe changes krega uske according ui pe aur menu bar pe changes show krna hai
// so, multiple cells are there aur every individual cell has different  properties to hume utna sabhi data ko store krne ke liye storage ki jarurat padegi
// so, we need storage for all cells, storage will be in matrix(2D matrix) form, 1 to 100 rows hogi and 1 to 26 columns hogi  
// JAvascript ke pas aisa kya hai jo wo kafi sari properties ek sath store krke rkh skta hai? JS Object jo {key, value} pair form me data store rkhega
// Storage[2D Matrix with object] (object will be cell)
// 1D array ke under subarrays hogi which will represent every rows, then subarrays will have objects which will store properties of every cell in the perticular row and col

// Storage for storing new added sheet 
let collectedSheetDB = [];  //Contains all SheetDB

// Storage for storing properties of every individual cell
let sheetDB = [];

{
    let addSheetBtn = document.querySelector(".sheet-add-icon");
    addSheetBtn.click();
}

// for (let i = 0; i < rows; i++) {
//     let sheetRow = [];
//     for (let j = 0; j < cols; j++) {
//         let cellProp = {
//             bold: false,
//             italic: false,
//             underline: false,
//             alignment: "left",
//             fontFamily: "monospace",
//             fontSize: "14",
//             fontColor: "#000000",
//             BGcolor: "#000000",  // Just for indication purpose,
//             value: "",
//             formula: "",
//             children: [],
//         }
//         sheetRow.push(cellProp);
//     }
//     sheetDB.push(sheetRow);
// }


// Selectors for cell properties
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor-prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

// Application of two-way binding
// Attach property listeners


bold.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // Modification
    cellProp.bold = !cellProp.bold; // Data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // UI change (1)
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // UI change (2)
})

italic.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // Modification
    cellProp.italic = !cellProp.italic; // Data change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // UI change (1)
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // UI change (2)
})

underline.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    // Modification
    cellProp.underline = !cellProp.underline; // Data change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // UI change (1)
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // UI change (2)
})

fontSize.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.fontSize = fontSize.value; // Data change
    cell.style.fontSize = cellProp.fontSize + "px"; // UI change (1) on cells
    fontSize.value = cellProp.fontSize; // UI change (2) on icons menu bar
})

fontFamily.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.fontFamily = fontFamily.value; // Data change
    cell.style.fontFamily = cellProp.fontFamily; // UI change (1) on cells
    fontFamily.value = cellProp.fontFamily; // UI change (2) on icons menu bar
})

fontColor.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.fontColor = fontColor.value; // Data change
    cell.style.color = cellProp.fontColor; // UI change (1) on cells
    fontColor.value = cellProp.fontColor; // UI change (2) on icons menu bar
})

BGcolor.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = getCellAndCellProp(address);

    cellProp.BGcolor = BGcolor.value; // Data change
    cell.style.backgroundColor = cellProp.BGcolor; // UI change (1) on cells
    BGcolor.value = cellProp.BGcolor; // UI change (2) on icons menu bar
})

alignment.forEach((alignElem) => {
    alignElem.addEventListener("click", (e) => {
        let address = addressBar.value;
        let [cell, cellProp] = getCellAndCellProp(address);

        let alignValue = e.target.classList[0];
        cellProp.alignment = alignValue; // Data change
        cell.style.textAlign = cellProp.alignment; // UI change (1) on cells

        switch(alignValue) { // UI change (2) on icons menu bar
            case "left":
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = activeColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = activeColorProp;
                break;
        }

    })
})

// we are getting this .cell class from grid.js and it will give us the address of every cell on the grid which ever cell we click
let allCells = document.querySelectorAll(".cell");
for (let i = 0;i < allCells.length;i++) {
    addListenerToAttachCellProperties(allCells[i]);
}

function addListenerToAttachCellProperties(cell) {
    // Work
    cell.addEventListener("click", (e) => {
        let address = addressBar.value; // address like A1, B2, C4...
        let [rid, cid] = decodeRIDCIDFromAddress(address); // decode A1 into [0][0] location of cell in 2D matrix which is our storage
        let cellProp = sheetDB[rid][cid]; // access the cell properties which is stored in the storage 

        // UI change (1)
        // Apply cell Properties cell when user click on that particular cell ( means restore initially set properties )
        cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
        cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
        cell.style.textDecoration = cellProp.underline ? "underline" : "none";
        cell.style.fontSize = cellProp.fontSize + "px";
        cell.style.fontFamily = cellProp.fontFamily;
        cell.style.color = cellProp.fontColor;
        cell.style.backgroundColor = cellProp.BGcolor === "#000000" ? "transparent" : cellProp.BGcolor;
        cell.style.textAlign = cellProp.alignment;
                

        // Apply properties to UI Props container
        bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
        italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
        underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
        fontColor.value = cellProp.fontColor;
        BGcolor.value = cellProp.BGcolor;
        fontSize.value = cellProp.fontSize;
        fontFamily.value = cellProp.fontFamily;
        switch(cellProp.alignment) { // UI change (2)
            case "left":
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = activeColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = activeColorProp;
                break;
        }
        // if user has set formula for that cell to evaluate value, then that formula also be restored in the formula bar  
        let formulaBar = document.querySelector(".formula-bar");
        formulaBar.value = cellProp.formula; 
        cell.innerText = cellProp.value;
    })
}

// 
function getCellAndCellProp(address) {
    let [rid, cid] = decodeRIDCIDFromAddress(address); // rid[0,,,,10] cid[0,,,,25]
    // Access cell & storage object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`); //get the cell from UI becoz we have to make changes on UI and storage, so, cell will help to make changes on UI
    let cellProp = sheetDB[rid][cid]; // get cell properties from storage
    return [cell, cellProp]; 
}

// Decode rowId[1,,,,,10] and colId[A,,,,,Z] into rid[0,,,,,,99] and cid[0,,,,,25]
function decodeRIDCIDFromAddress(address) {
    // address -> "A1"
    let rid = Number(address.slice(1) - 1); // "1" -> 0
    let cid = Number(address.charCodeAt(0)) - 65; // "A" -> 65
    return [rid, cid];
}