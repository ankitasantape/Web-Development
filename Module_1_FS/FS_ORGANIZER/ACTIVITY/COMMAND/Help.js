
function helpfn(src) {
     // 1. node main.js tree "path"
     // 2. node main.js organize "path"
     // 3. node main.js help 
    console.log(`list of all the commands -   
       
                    1. node main.js tree ${src}
        
                    2. node main.js organize ${src}
        
                    3. node main.js help ${src}` );
}

//  ocde export
module.exports = {
    help : helpfn
    
}
