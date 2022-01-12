(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let resources = [];
    let cfid  = -1; // current folder id
    let rid = 0;

    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);

    function addFolder(){
        let rname = prompt("Enter folder's name");
        rname = rname.trim();
        if (!rname){
            alert("Empty name is not allowed.");
            return;
        }
        
        let alredyExists = resources.some(r => r.rname == rname && r.pid == cfid);
        if (alredyExists == true){
            alert(rname + " is already in use. Try some other name");
            return;
        }
        rid++;
        let pid = cfid;
        addFolderHTML(rname, rid, pid);
        resources.push({
               rid : rid,
               rname: rname,
               rtype: "folder",
               pid : cfid   
        });
        saveToStorage();
    }

    function addFolderHTML(rname, rid, pid){
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true); // makes a copy

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete = divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view]");
        let divName = divFolder.querySelector("[purpose=name]");

        spanRename.addEventListener("click", renameFolder);
        spanDelete.addEventListener("click", deleteFolder);
        spanView.addEventListener("click", viewFolder);
        divName.innerHTML = rname;
        divFolder.setAttribute("rid", rid);
        divFolder.setAttribute("pid", pid);

        divContainer.appendChild(divFolder);
    }

    function addTextFile(){
        let tfname = prompt("Enter text file's name");
        console.log(tfname);
    }

    function deleteFolder(){
        console.log("In delete");
    }

    function deleteTextFile(){

    }

    function renameFolder(){
        let rname = prompt("Enter new folder's name");
        if(rname !== null){
            rname = rname.trim();
        }
        if (!rname){
            alert("Empty name is not allowed.");
            return;
        }

        let spanRename = this;
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']")
        let orname = divName.innerHTML; // old rname
        let ridTBU = parseInt(divFolder.getAttribute("rid"));
        if(orname == rname){
            alert("Please enter a new name.");
            return;
        }

        let alredyExists = resources.some(r => r.rname == rname && r.pid == cfid);
        if (alredyExists == true){
            alert(rname + " is already in use. Try some other name");
            return;
        }

        // change html
        divName.innerHTML = rname;
        // change ram
        let resource = resources.find(r => r.rid == ridTBU);
        resource.rname = rname;
        // change storage
        saveToStorage();
    }

    function renameTextFile(){

    }

    function viewFolder(){
        console.log("In view");
    }

    function viewTextFile(){

    }

    function saveToStorage(){
        let rjson = JSON.stringify(resources);
        localStorage.setItem("data", rjson);
    }

    function loadFromStorage(){
        let rjson = localStorage.getItem("data");
        if(!rjson){
            return;
        }

        if(!!rjson){
            resources = JSON.parse(rjson);
            for (let i = 0; i < resources.length; i++) {
                if(resources[i].pid == cfid){
                    addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                }

                if(resources[i].rid > rid){
                    rid = resources[i].rid;
                }
            }
        } 
    }

    loadFromStorage();
})();
// to prevent namespace pollution