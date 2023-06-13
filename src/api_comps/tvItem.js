import React,{useState} from 'react'

export default function TvItem(props) {
    const [showInfo,setShowInfo]=useState(false);
    let item=props.item;

    return (
    <div className='container'>
        <div className='shadow p-2 overflow-hidden h-100'>
            <img src={`/images/${item.image}`} className='w-50 float-start me-2 border' alt={item.name}/>
            <h4>{item.name}</h4>
            <div>Genere: {item.genere}</div>
            <div>Views: {item.views.toLocalString()}</div>
            <button onClick={()=>{
                setShowInfo(!showInfo)
            }}>show/hide info</button>
            {showInfo && <p>item.descrption</p>}
        </div>
        </div>
  )
}

TvItem