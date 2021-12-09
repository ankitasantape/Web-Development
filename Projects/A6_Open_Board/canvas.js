let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// API -> help to draw graphics
let tool = canvas.getContext("2d");

// strokeStyle -> color
tool.strokeStyle = "blue";
// lineWidth -> width( thickness ) 
tool.lineWidth = "5";

tool.beginPath(); // new graphic (path) or (line)
tool.moveTo(10, 10); // start point
tool.lineTo(100, 150); // end point
tool.stroke(); // to fill color (fill graphic)

// tool.moveTo(left, top)
tool.moveTo(100, 150); // start point
tool.lineTo(200, 294); // end point
tool.stroke();


tool.beginPath(); // new graphic (path) or (line)
tool.moveTo(10, 10); // start point
tool.lineTo(500, 10); // end point
tool.stroke();


tool.moveTo(500, 10); // start point
tool.lineTo(200, 294); // end point
tool.stroke();