// IIFE
(function(){

    let addBtnFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplate = document.querySelector("#pageTemplates");
    let folders = [];
    let fid = 0;

    // load in the beginning
    // let fjson = localStorage.getItem("data"); 
    // if (fjson != null && fjson.length > 0){

    //     folders = JSON.parse(fjson);
    // }

    // IIFE ke under, IIFE ke variables ne es function pe closure banake rakha hai
    addBtnFolder.addEventListener("click", function(){
        let fname = prompt("Enter folder's name");
        if ( !fname ){
            return;
        }
        
        let divFolderTemplate = pageTemplate.content.querySelector(".folder");
        // true ke help se copy hoga inside divFolderTemplate ke under ka data divFolder
        let divFolder = document.importNode(divFolderTemplate, true);
        
        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", ++fid);
         
        // RAM
        
        // html
         
        // Local Storage

        let spanEdit = divFolder.querySelector("[action='edit']");
        let spanDelete = divFolder.querySelector("[action='delete']");
        
         // es function ke upper bahar wale variables ne closure banane start kr diye hai
        spanDelete.addEventListener("click", deleteFolder);

        spanEdit.addEventListener("click", editFolder);

        divContainer.appendChild(divFolder);
        folders.push({
            id : fid,
            name : fname
        })
        // console.log(folders);
        persistFolders();
    });

    function editFolder(){
        // yaha pe divName aur divFolder to nhi milega but hume 'this' mil skta hai this = edit milega aur us 'this' se
        // hume edit ka parent milega jo ki hai 'divFolder' 
        let newfname = prompt("Enter the new folder name");
        if (!newfname) {
            return;
        }
        divName.innerHTML = newfname;
        
        // if you write fid it gives error for folder.name  
        // let idx = folders.findIndex(f => f.id == fid);
        let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("fid")));
        folder.name = newfname;

        // console.log(folders);
        persistFolders();
    } 

    function deleteFolder(){
        let flag = confirm("Are you sure you want to delete the folder " + divName.innerHTML);
        if (flag == true){
            divContainer.removeChild(divFolder);

            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));
            folders.splice(idx, 1);
        }
        persistFolders();
    }

    function persistFolders(){
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }
    
})();

