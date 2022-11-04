import React from 'react'
import header from './Header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
 
  return (
    <div className='header'>
         
        <div className='list'>
        <h4 onClick={()=>navigate('/')}>Estatery</h4>
            
            <button className='btns'>Rent</button>
            <button className='btns'>Buy</button>
            <button className='btns'>Sell</button>
            <button className='btns'>Manage Property</button>
            <button className='btns'> Resources</button>
            <button onClick={()=>navigate('/fav')} className='fav'>Favpage</button>
           <button id='btn1'>Login</button>
           <button id='btn2'>Signup</button>
         
        </div>
         
    </div>
  )
}

export default Header;