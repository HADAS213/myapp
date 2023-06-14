import React, { useState } from 'react'

export default function CazinoInput() {

    const [dice,setDice]=useState(0);
    const [score,setScore]=useState(0);
    

    const cangeDice = () => {
        setDice(Math.floor(Math.random() * 5)+1);
        if(dice===5||dice===6){
            setScore(score+2)
        }
        else{
            setScore(score-1);
        }


    }

    return (
        <div  className='container'>
            <ArrImg/>
            {/* <h2>Your score is {score}</h2>
            <h2>Your dice id {dice}</h2> */}
            <button onClick={cangeDice}>ROLL</button>
        </div>
    )
}

