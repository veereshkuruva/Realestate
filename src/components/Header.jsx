import React from 'react'

const Header = () => {
  return (
    <div className='header'>
         
        <div className='list'>
        <h4>Estatery</h4>
            <button className='btns'>Rent</button>
            <button className='btns'>Buy</button>
            <button className='btns'>Sell</button>
            <button className='btns'>Manage Property</button>
            <button className='btns'> Resources</button>
           <button id='btn1'>Login</button>
           <button id='btn2'>Signup</button>
         
        </div>
         
    </div>
  )
}

export default Header