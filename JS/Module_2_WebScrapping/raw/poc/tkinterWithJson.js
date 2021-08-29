let fs = require("fs");
let xlsx = require("xlsx");
// let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
// console.log("`````````````````````````````````");
// array
let data = require("./example.json");
// console.log(data);

// data.push({
//     "Name" : "Shane Watson",
//     "Runs": 4,
//     "Balls": 5,
//     "Fours": 1,
//     "Sixes": 0,
//     "SR": 80.00
// });
// let stringData = JSON.stringify(data);
// fs.writeFileSync("example.json", stringData);


// write file
// // wb(workbook) - filepath, ws(worksheet) - name, json data
// // new worksheet

function excelWriter(filePath, json, sheetName) {
    let newWB = xlsx.utils.book_new();
    // // json data convert into excel format
    let newWS = xlsx.utils.json_to_sheet(json);
    // // newwb, ws, sheet name
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    // // filepath
    xlsx.writeFile(newWB, filePath);
}



// read file
// filePath - abc.xlsx
// workbook get 

function excelReader(filePath, sheetName){
    if(fs.existsSync(filePath) == false){
        return [];
    }
    let wb = xlsx.readFile(filePath);
    // name - sheet-1 - To get sheet
    let excelData = wb.Sheets[sheetName];
    // to get sheet data
    let ans = xlsx.utils.sheet_to_json(excelData);
    return; 
    // console.log(ans);
}

