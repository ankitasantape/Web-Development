let evalBtn = document.querySelector(".app-form-button");

evalBtn.addEventListener("click", calcy);

function calcy() {
     let wp = document.getElementById("wp").value;
     let maths = document.getElementById("maths").value;
     let comp = document.getElementById("comp").value;
     let ds = document.getElementById("ds").value; 
     
     let totalGrades = parseFloat(wp) + parseFloat(maths) + parseFloat(comp) + parseFloat(ds);
     let perc = (totalGrades / 400) * 100;
     
     let grade = "";

     if(totalGrades >= 80 || totalGrades <= 100){
          grade = "A";
     } else if(totalGrades >= 70 || totalGrades < 80){
          grade = "B";
     } else if(totalGrades >= 60 || totalGrades < 70){
          grade = "C";
     } else {
          grade = "D"
     }
     
     let showdata = document.querySelector(".showdata");
     if(perc >= 39.9){ 
          showdata.style.display = "block";
          document.getElementById("showData").innerHTML = `Out of 400 your
          score is ${totalGrades} and your percentage is ${perc}%. <br>
           Your are Pass.`;      
     } else {
          showdata.style.display = "block";
          document.getElementById("showData").innerHTML = `Out of 400 your
          score is ${totalGrades} and your percentage is ${perc}%. <br>
          Your are Fail.`;
         
     }
    

     alert(totalGrades);
}