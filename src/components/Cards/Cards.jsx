import React from 'react'
import cards from './card.css'
import { useState } from 'react'
import { FaGratipay } from "react-icons/fa";
import data from '../../Data'
import {useDispatch} from 'react-redux'
import { addFavPage } from '../../Redux/CartReducer';
import MainPage from '../MainComp/MainPage';

  const Cards = (props) => {
   const {id,name,price,location,img} =props.eles
  const dispatch =useDispatch()

  return (
    <>
      
      <div className='card-container'>
       
             <div className='box shadow'>
              <div className='img-container' >
              
                <img src={img} />
                <span><FaGratipay /></span>
              </div>
              <div className='price'>
                <h3>{price}</h3>
               
              </div>
              <div className='title'>
                <h3>{name}</h3>
                 <p>{location}</p>
                <button className='btn-btn'
                  onClick={()=>dispatch(addFavPage(props?.eles ))}>AddFavouratePage</button>
              </div>
            </div>
 </div>
  
    
    </>
  )
}

export default Cards;