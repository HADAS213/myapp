import React from 'react'

function VodInput() {
  return (
    <header className='container-fluid bg-dark p-2'>
        <div className='container'>
            <div className='row'>
                <div className='logo col-auto'>
                    <h2 className='text-white'>My Vod</h2>

                </div>
                <nav className='d-flex col-md-6'>
                    <input type='search' placeholder='search...' className='form-control' />
                    <button className='btn btn-warning'>Search</button>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default VodInput