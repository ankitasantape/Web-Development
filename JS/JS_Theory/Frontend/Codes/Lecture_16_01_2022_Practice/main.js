(function (){
   let btnAddFolder = document.querySelector("#addFolder");
   let btnAddTextFile = document.querySelector("#addTextFile");
   let divContainer = document.querySelector("#container");  
   let templates = document.querySelector("#templates");
   let resources = [];
   let cfid = -1; // default parent root node
   let fid = 0; 

   btnAddFolder.addEventListener("click", addFolder); 
   btnAddTextFile.addEventListener("click", addTextFile);


   function addFolder(){
         let fname = prompt("Enter folder's name");
         if (fname != null) {
             fname = fname.trim();
         }  

         if (!fname){
             alert("Empty name is not allowed.");
             return;
         }

         let alreadyExists = resources.some(f => f.fname == fname && f.pid == cfid);
         if (alreadyExists) {
             alert(fname + " is already exists. Try some other name");  
             return; 
         }
         let pid = cfid;
         fid++;
         // add into html
         addFolderHTML(fname, fid, pid);

         // add into RAM
         resources.push({ 
             fid: fid,
             fname: fname,
             ftype: "folder",
             pid: cfid
        });
         
         // add into localstorage 
         saveToStorage();  
   }

   function addFolderHTML(fname, fid, pid) {
       let divFolderTemplate = templates.content.querySelector(".folder"); 
       let divFolder = document.importNode(divFolderTemplate, true);
       
       let divName = divFolder.querySelector("[purpose='name']");
       
       divName.innerHTML = fname;
       divFolder.setAttribute("rid", fid);
       divFolder.setAttribute("pid", pid);

       divContainer.appendChild(divFolder);
       
   }
    // Save To Storage
   function saveToStorage(){
       let rjson = JSON.stringify(resources); 
       localStorage.setItem("data", rjson);
   }
   // Load From Storage
   function loadFromStorage(){
        let rjson = localStorage.getItem("data");
        if( !rjson ) {
            return;
        }
        
        resources = JSON.parse(rjson);
        
        for ( let i = 0; i < resources.length; i++){
            // console.log(resources + " " + resources[i].pid + " -> " + cfid);
            if ( resources[i].pid == cfid ){
                console.log(resources[i].ftype);
                 if ( resources[i].ftype == "folder" ){
                     console.log(resources);
                     addFolderHTML(resources[i].fname, resources[i].fid, resources[i].pid);
                 } else if (resources[i].ftype == "text-file"){
                    addTextFileHTML(resources[i].fname, resources[i].fid, resources[i].pid);
                 }
            }

            if (resources[i].fid > fid) {
                fid = resources[i].fid;
            }
        }

   }

   function deleteFolder(){ 

   }

   function renameFolder(){

   }

   function viewFolder(){

   }

   function addTextFile(){
    let fname = prompt("Enter text file's name");
    if (fname != null) {
        fname = fname.trim();
    }  

    if (!fname){
        alert("Empty name is not allowed.");
        return;
    }

    let alreadyExists = resources.some(f => f.fname == fname && f.pid == cfid);
    if (alreadyExists) {
        alert(fname + " is already exists. Try some other name"); 
        return;  
    }
    let pid = cfid;
    fid++;
    // add into html
    addTextFileHTML(fname, fid, pid);

    // add into RAM
    resources.push({ 
        fid: fid,
        fname: fname,
        ftype: "text-file",
        pid: cfid
   });
    
    // add into localstorage 
    saveToStorage(); 
   }

   function addTextFileHTML(fname, fid, pid){
      let divFileTemplate = templates.content.querySelector(".text-file"); 
      let divFile = document.importNode(divFileTemplate, true);
    
      let divName = divFile.querySelector("[purpose='name']");
      divName.innerHTML = fname;
      divFile.setAttribute("fid", fid);
      divFile.setAttribute("pid", pid);
      divContainer.appendChild(divFile);
   }

   function deleteTextFile(){ 

   }

   function renameTextFile(){

   }

   function viewTextFile(){
    
   }

   loadFromStorage();

})();