import React,{useState} from "react";

export default function Number(){
    const [counter,setCounter] = useState(0);


    const add1=()=>{
        setCounter(counter+1);
      if(counter+1 > 5){
        setCounter(0)
      }
    }

    const les1=()=>{
        setCounter(counter-1);
    }

    return (
        <div className='container'>
          <h2>{counter}</h2>
          <button onClick={add1}>+</button>
          <button onClick={les1}>-</button>
        </div>
      )
}