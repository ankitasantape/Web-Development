import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrintMyNames from './PrintMyNames';

class Counter extends React.Component{
    state = {
       count : 10
    }
    
    incrementCounter = () => {
        // this.state: counter++ nhi kr skte react me, allowed nhi nahi hai aisa krna
        this.setState({
          count: count + 1
        })
    }

    decrement
    Counter = () => {
      // this.state: counter++ nhi kr skte react me, allowed nhi nahi hai aisa krna
      this.setState({
        count: count + 1
      })
  }



}  


ReactDOM.render(
  //  <PrintMyNames></PrintMyNames>,
   
 
  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

