import React,{useState} from 'react'
import DateInput from './dateInput'
import DateView from './dateView'

function AppDate() {
    const [deadline,setDeadline]=useState("2024-01-01");
  return (
    <div className='container'>
<DateView deadline={deadline}/>
<DateInput setDeadline={setDeadline}/>
    </div>
    
  )
}

export default AppDate