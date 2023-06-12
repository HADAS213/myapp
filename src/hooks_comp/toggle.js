import React, { useState } from 'react'

export default function Toggle() {
    const [showInfo,setShowInfo]=useState(false);

    const  onShowInfo=()=>{
        setShowInfo(!showInfo)
    }

    const para2=()=>{
        return <p className='text-danger'>para 2 somthing para 2 somthing</p>
    }

  return (
    <div className='container'>
        <h2>Info about somthing</h2>
        <button onClick={onShowInfo}>{{showInfo}?"hide":"show"} info</button>

{
    (showInfo)?
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolorem obcaecati fuga incidunt amet excepturi cupiditate, repellendus nihil, illo assumenda, architecto in impedit nam necessitatibus ipsam quaerat culpa voluptatum sed. Quis eum optio porro minus nulla reprehenderit, ratione corporis magnam. Debitis consequatur mollitia omnis nostrum numquam deleniti quas itaque amet.</p>:""
}

{
    showInfo &&
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolorem obcaecati fuga incidunt amet excepturi cupiditate, repellendus nihil, illo assumenda, architecto in impedit nam necessitatibus ipsam quaerat culpa voluptatum sed. Quis eum optio porro minus nulla reprehenderit, ratione corporis magnam. Debitis consequatumquam </p>
}
{
    showInfo &&
    para2()
}


        </div>
  )
}

