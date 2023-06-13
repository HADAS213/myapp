import React, { useState } from 'react'

export default function Color() {

    const[color,setColor]=useState("silver");
    const selectRef = useRef;

   
        return (
            <div className='container'>
                <h2 style={{color:color}}>choose your favorite color: {this.state.color}</h2>
<select defaultValue={gold} ref={selectRef} onChange={()=>{
    setColor(selectRef.current.value)
}} className='form-select'>
    <option value="">select your favorite color</option>
    <option value={red}>Red</option>
    <option value={blue}>Blue</option>
    <option value={green}>Green</option>
    </select>                
            </div>
        );
    
      
 
}


