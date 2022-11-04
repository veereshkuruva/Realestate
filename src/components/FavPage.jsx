import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const FavPage = () => {

    const data1 =useSelector((state)=>state.cartValues)
     console.log(data1)
  return (
    <>
     <Header/>
           <h1>hello</h1>
    </>
      
  )
}

export default FavPage