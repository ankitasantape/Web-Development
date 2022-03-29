
// first access all cells
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        // get current cell
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        // add blur event. why click event not used here? blur works first as compared to click event.
        // if I add listener on click, it will immediately vanished off data of the previous cell in address bar
        // but if add listener on blur it will first store the data of previous cell in DB from address ar 
        cell.addEventListener("blur", (e) => {
            // get current cell address from address ar
            let address = addressBar.value;
            // access object of active cell, and object of cell properties 
            let [activeCell, cellProp] = getCellAndCellProp(address);
            // get recently entered data into cell and data of integer or string type 
            let enteredData = activeCell.innerText;

            // blur krne par koi value change bhi ho skti hai 
            // to agar entered data already padi huyi hai cellProp me to koi sense nhi krna ki hum wo value ko change kr de
            // to aise case me hum return kr jayenge
            // agar change perform krke bhi aapake pas agar same value hai to aapko value ko update krne ki koi need nhi hai
            if (enteredData === cellProp.value) return;

            cellProp.value = enteredData;
            // If data modifies remove P-C relation, formula empty, update children with new hardcoded (modified) value
            removeChildFromParent(cellProp.formula);
            
            cellProp.formula = "";

            // agar koi value hard-code se update ki gayi hai to tab bhi hum childrenCells ko update kr denge aur us case us cell ke liye formula bar me koi value nhi rahegi formula bar empty rahega
            updateChildrenCells(address);
        })
    }
}

/*

Formula Evaluation:
-> Normal Expression 
    -> Hard Code value: eg(10 + 20)
-> Dependancy Expression
    -> Dependancy Control Value: (A1 + A2 + 10)

*/ 
let formulaBar = document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown", async (e) => {
    let inputFormula = formulaBar.value;
    // inputFormula value can be empty then return empty formula not allowed
    if (e.key === "Enter" && inputFormula) {
        // If change in formula, break old P-C relation, evaluate new formula, add new P-C relation
        let address = addressBar.value;
        let [cell, cellProp] = getCellAndCellProp(address);
        
        // incase agar formula change ho gya to hume remove child krna padega means parent-child ka relation break krna padega 
        // agar similar formula hi phirse enter kiya to hum kuch nhi krenge wapas chale jayenge
        // isiliye humane ye check lagaya
        if (inputFormula !== cellProp.formula) removeChildFromParent(cellProp.formula);

        addChildToGraphComponent(inputFormula, address);
        // Check formula is cyclic or not, then only evaluate
        // True -> cycle, False -> Not cyclic
        // console.log(graphComponentMatrix);
        let cycleResponse = isGraphCyclic(graphComponentMatrix);
        if (cycleResponse) {
            // alert("Your formula is cyclic");
            let response = confirm("Your formula is cyclic. Do you want to trace your path?");
            while (response === true) {
                // Keep on tracking color until user is satisfied
                await isGraphCyclicTracePath(graphComponentMatrix, cycleResponse); // I want to complete full  iteration of color tracking, so I will attach wait here also
                response = confirm("Your formula is cyclic. Do you want to trace your path?");
            }
            removeChildFromGraphComponent(inputFormula, address);
            return;
        }

        let evaluatedValue = evaluateFormula(inputFormula);

        // To update UI and cellProp in DB
        setCellUIAndCellProp(evaluatedValue, inputFormula, address);
        // add child to parent
        addChildToParent(inputFormula);
        // humane child ko parent ke children's arr me to dal diya 
        // update children's cell
        // jb humane p-c relation break krke jo new formula dala tb new p-c relations bhi create ho gayi hogi 
        // to hume wo new p-c relation ko update krni padege aur automatically hume apne children's ki value ko bhi update krni padegi nayese evaluate krke
        updateChildrenCells(address);
    }
})

function addChildToGraphComponent(formula, childAddress) {
    let [crid, ccid] = decodeRIDCIDFromAddress(childAddress);
    let encodedFormula = formula.split(" ");
    for (let i = 0; i < encodedFormula.length; i++) {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if (asciiValue >= 65 && asciiValue <= 90) {
            let [prid, pcid] = decodeRIDCIDFromAddress(encodedFormula[i]);
            // B1: A1 + 10
            // rid -> i, cid -> j
            graphComponentMatrix[prid][pcid].push([crid, ccid]);
        }
    }
}


function removeChildFromGraphComponent(formula, childAddress) {
    let [crid, ccid] = decodeRIDCIDFromAddress(childAddress);
    let encodedFormula = formula.split(" ");

    for (let i = 0; i < encodedFormula.length; i++) {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if (asciiValue >= 65 && asciiValue <= 90) {
            let [prid, pcid] = decodeRIDCIDFromAddress(encodedFormula[i]);
            graphComponentMatrix[prid][pcid].pop();
        }
    }
}

// recursive function
function updateChildrenCells(parentAddress) {
    let [parentCell, parentCellProp] = getCellAndCellProp(parentAddress); // this function declared in cell-properties.js
    // parent cell ke properties me jo children property padi hai usako nikalenge
    // means hume humare parent ke childrens mil jayenge
    let children = parentCellProp.children; // childrens ka array return hoga
    
    // iterate over childrens
    // base case khud ye for loop hai
    // jb children ki length zero hai tab ye loop nhi chalega aur automatically return ho jayega
    for (let i = 0; i < children.length; i++) {
        let childAddress = children[i]; // get address of cell 'B1', 'C1' 
        let [childCell, childCellProp] = getCellAndCellProp(childAddress); // this function declared in cell-properties.js
        let childFormula = childCellProp.formula; // child cell property se child cell ka formula nikalo
        // evaluate value of child
        let evaluatedValue = evaluateFormula(childFormula); // child ki value ko evaluate kro from childformula
        // update new value of child and set UI and cellProps
        setCellUIAndCellProp(evaluatedValue, childFormula, childAddress); // evaluated value ko UI and CellProperties me set kro
        // agar hum parent cell me kuch change karte hai to wo change child cell me bhi reflect hona chahiye
        // hume dependencies ko handle krna padega recursively
        updateChildrenCells(childAddress); // aur next call pe childAddress ko pass krdo taki wo child usake child ko update kre jaise hum recursion me krte hai waisa
    }
}

function addChildToParent(formula) { // acticeCell : C1 | formula : ( B1 * 2 ) -> B1 = 10 hai --- after evaluating --> C1 = 10 * 2 = 20
    let childAddress = addressBar.value; // C1 -> we want to calculate value for cell C1 so we have clicked on cell C1 so currently address bar has value of child cell C1
    let encodedFormula = formula.split(" "); // normal expression ya decoded formula reh skta hai isiliye hume split krna padega
    for (let i = 0; i < encodedFormula.length; i++) {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if (asciiValue >= 65 && asciiValue <= 90) {
            let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]); // get parent's cell and its properties
            parentCellProp.children.push(childAddress); // add children to -> parent's property which is children[] arr into it add children
        }
    }
}

// ye function ke under pehle old formula aayega. why? becoz hume pehle old parent-child ke relation ko break krna hai 
function removeChildFromParent(formula) {
    let childAddress = addressBar.value;
    let encodedFormula = formula.split(" ");
    for (let i = 0; i < encodedFormula.length; i++) {
        let asciiValue = encodedFormula[i].charCodeAt(0);
        if (asciiValue >= 65 && asciiValue <= 90) {
            let [parentCell, parentCellProp] = getCellAndCellProp(encodedFormula[i]); // this function declared in cell-properties.js
            // find the index of childAddress
            let idx = parentCellProp.children.indexOf(childAddress);
            // splice will remove one value from the given array
            parentCellProp.children.splice(idx, 1);
        }
    }
}

function evaluateFormula(formula) { //  A1 + A2 
    // arr
    let encodedFormula = formula.split(" "); // [ 'A1' , '+', 'A2' ]
    for (let i = 0; i < encodedFormula.length; i++) {
        let asciiValue = encodedFormula[i].charCodeAt(0); // 'A', 'B' ...
        if (asciiValue >= 65 && asciiValue <= 90) { // 'A' >= 65 && 'A' <= 90
            let [cell, cellProp] = getCellAndCellProp(encodedFormula[i]); // this function declared in cell-properties.js
            encodedFormula[i] = cellProp.value;
        }
    }
    let decodedFormula = encodedFormula.join(" "); // decoded -> A1 + A2 , encoded -> 10 + 10
    return eval(decodedFormula); // 10 + 10 = 20
}


function setCellUIAndCellProp(evaluatedValue, formula, address) {
    let [cell, cellProp] = getCellAndCellProp(address);

    //UI update
    cell.innerText = evaluatedValue; // value : 10 + 10 = 20 ---> decoded
    // DB update
    cellProp.value = evaluatedValue; // value : 20 
    cellProp.formula = formula; // formula :  10 + 10 or A1 + 10 or A1 + A2 ---> encoded
}