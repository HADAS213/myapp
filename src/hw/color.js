import React, { useState } from 'react'

function Color() {

    const[color,setColor]=useState("silver");
    const inputRef = useRef;

    const onChangeColor = () => {
        props.setColor(inputRef.current.value);
    }

    return (
        <div className='col-md-4 mx-auto d-flex'>
            <input ref={inputRef} defaultValue={"2024-01-01"} type='date' className='form-control' />
            <button onClick={onChangeColor}>change</button>

        </div>
    )
  return (
    <div>

    </div>
  )
}

export default Color