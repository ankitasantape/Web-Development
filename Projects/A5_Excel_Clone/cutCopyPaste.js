let ctrlKey;
document.addEventListener("keydown", (e) => {
    ctrlKey = e.ctrlKey; // e.ctrlKey returns boolean value true
})
document.addEventListener("keyup", (e) => {
    ctrlKey = e.ctrlKey; // e.ctrlKey returns boolean value false
})

// now we need add listener on click 
for (let i =0;i < rows;i++) {
    for (let j = 0;j < cols;j++) {
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        handleSelectedCells(cell);
    }
}

let copyBtn = document.querySelector(".copy");
let cutBtn = document.querySelector(".cut");
let pasteBtn = document.querySelector(".paste");

// task to handle select range  
// hume select ki range pata krne ke liye bhi ek storage chahiye hoga to know ki user ne kaha se kaha tk ki range select ki hai
let rangeStorage = [];
function handleSelectedCells(cell) {
    cell.addEventListener("click", (e) => {
        // Select cells range work
        // if ctrlKey not pressed then return 
        if (!ctrlKey) return;
        // 2 cells se maximum cell selected nhi honi chahiye, agar aisa hai to return kr jao
        if (rangeStorage.length >= 2) {
            defaultSelectedCellsUI();
            rangeStorage = [];
        }

        // UI
        // to highlight the border of selected cell
        cell.style.border = "3px solid #218c74";

        let rid = Number(cell.getAttribute("rid"));
        let cid = Number(cell.getAttribute("cid"));
        // data storage me push kr do
        rangeStorage.push([rid, cid]);
        console.log(rangeStorage);
    })
}

function defaultSelectedCellsUI() {
    for (let i = 0;i < rangeStorage.length;i++) {
        // first cell : rangeStorage[i][0], second cell : rangeStorage[i][1]
        let cell = document.querySelector(`.cell[rid="${rangeStorage[i][0]}"][cid="${rangeStorage[i][1]}"]`);
        // to unselect highlighted cell
        cell.style.border = "1px solid lightgrey";
    }
}

let copyData = [];
copyBtn.addEventListener("click", (e) => {
    console.log("Copy event occure.")
    // if there is only one selected 
    if (rangeStorage.length < 2) return;

    copyData = [];
    
    // startrid : rangeStorage[0][0]
    // startcid : rangeStorage[0][1]
    // endrid : rangeStorage[1][0]
    // endcid : rangeStorage[1][1]
    let [strow, stcol, endrow, endcol] = [ rangeStorage[0][0], rangeStorage[0][1], rangeStorage[1][0], rangeStorage[1][1] ];

    for (let i = strow;i <= endrow;i++) {
        let copyRow = [];
        for (let j = stcol;j <= endcol;j++) {
            // get data from sheetDB
            let cellProp = sheetDB[i][j];
            // push data into copyRow array
            copyRow.push(cellProp);
        }
        // push copyRow into copyData array
        copyData.push(copyRow);
    }
    // after copying data the border of selected cells should be removed from UI  
    defaultSelectedCellsUI();
})

cutBtn.addEventListener("click", (e) => {
    if (rangeStorage.length < 2) return;

    let [strow, stcol, endrow, endcol] = [ rangeStorage[0][0], rangeStorage[0][1], rangeStorage[1][0], rangeStorage[1][1] ];

    for (let i = strow;i <= endrow;i++) {
        for (let j = stcol;j <= endcol;j++) {
            let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);

            // DB
            let cellProp = sheetDB[i][j];
            cellProp.value = "";
            cellProp.bold = false;
            cellProp.italic = false;
            cellProp.underline = false;
            cellProp.fontSize = 14;
            cellProp.fontFamily = "monospace";
            cellProp.fontColor = "#000000";
            cellProp.BGcolor = "#000000";
            cellProp.alignment = "left";

            // UI
            cell.click();
        }
    }

    defaultSelectedCellsUI();
})

pasteBtn.addEventListener("click", (e) => {

    // Past cells data work
    if (rangeStorage.length < 2) return;
     
    // 
    let rowDiff = Math.abs(rangeStorage[0][0] - rangeStorage[1][0]);
    let colDiff = Math.abs(rangeStorage[0][1] - rangeStorage[1][1]);

    // Target
    let address = addressBar.value;
    let [stRow, stCol] = decodeRIDCIDFromAddress(address);


    // r -> refers copydata row
    // c -> refers copydata col
    for (let i = stRow, r = 0; i <= stRow + rowDiff; i++, r++) {
        for (let j = stCol, c = 0; j <= stCol + colDiff; j++, c++) {
            let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
            console.log(cell);
            if (!cell) continue;

            // DB
            let data = copyData[r][c];
            let cellProp = sheetDB[i][j];

            cellProp.value = data.value;
            cellProp.bold = data.bold;
            cellProp.italic = data.italic;
            cellProp.underline = data.underline;
            cellProp.fontSize = data.fontSize;
            cellProp.fontFamily = data.fontFamily;
            cellProp.fontColor = data.fontColor;
            cellProp.BGcolor = data.BGcolor;
            cellProp.alignment = data.alignment;

            // UI
            cell.click();
        }
    }
})