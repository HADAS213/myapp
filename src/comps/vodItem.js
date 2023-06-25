import React from 'react'

function VodItem() {
  return (
    <div className='col-md-3 border p-2'>
        <img src='images/cover.jpg' className='float-start me-2 w-25'/>
        <h3>Rambo 5</h3>
        <div>Year: 2020</div>
        <button>More info</button>
    </div>
  )
}

export default VodItem