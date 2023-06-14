import React from 'react'

export default function ArrImg() {
    pic = "/images/";
    arr = [pic + "dice1.jpg", pic + "dice2.jpg", pic + "dice3.jpg", pic + "dice4.jpg", pic + "dice5.jpg", pic + "dice6.jpg"];

    const showImg=(props)=>{
        <img src={arr[props.dice]}/>
    }
    
  return (
    <div>ArrImg</div>
  )
}

