let whiteBoxCont = document.querySelector(".whitebox");
let ball = document.querySelector(".ball")

ball.addEventListener("mousedown", (e) => {
     ball.style.position = "absolute";
     ball.style.zIndex = 1000;

     document.body.append(ball);

     function moveAt(pageX, pageY){ 
         ball.style.left = pageX + "px";
         ball.style.top = pageY + "px";
     }

     moveAt(e.pageX, e.pageY);

    function onMouseMove(e){
        let x = e.pageX;
        let y = e.pageY;
    
        let coor = `X coords: ${x}, Y coords: ${y}`;
        console.log(coor);
        document.getElementById("coordinates").innerHTML = coor;
        moveAt(e.pageX, e.pageY);
    }

     ball.addEventListener("mousemove", onMouseMove);
})

// whiteBoxCont.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;
    
//     let coor = `X coords: ${x}, Y coords: ${y}`;
//     console.log(coor);
//     document.getElementById("coordinates").innerHTML = coor;
// })