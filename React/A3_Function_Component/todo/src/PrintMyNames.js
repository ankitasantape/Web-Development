import React from 'react';

function PrintMyName(props){
    return <h1>My Name is {props.name} is of {props.age} years</h1>
}

function PrintMyNames(){
   return (
      <>
         <PrintMyName name={"Ankita"} age={23} ></PrintMyName>
         <PrintMyName name={"Sumit"} age={25} ></PrintMyName>
         <PrintMyName name={"Jitu"} age={26} ></PrintMyName>
         <PrintMyName name={"Tejas"} age={27} ></PrintMyName>
      </>
   );
}

export default PrintMyNames;