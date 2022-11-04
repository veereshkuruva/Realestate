import React,{useState} from 'react';
import mainpages from './mainpage.css'
import data from '../../Data'
import Cards from '../Cards/Cards';
import { useSelector, useDispatch } from 'react-redux'
import { addFavPage } from '../../Redux/CartReducer';
import Header from "../Header"

const MainPage = () => {

const dispatch =useDispatch()
  const [state,setState]=useState(data)
  const [search,setSearch] =useState({
        name:"",
        location:"",
        price:""
  })
  const changeHandler=(event)=>{
    setState({...state,[event.target.name]:event.target.value})
   
  }
    
  const finalSearch =()=>{
  
    if(search.name.length>0){
        const filtername =state.filter((ele)=>ele.name ===name)
        setState([...filtername])
    }
    if(search.location.length>0){
      const filterlocation =state.filter((ele)=>ele.location ===location)
      setState([...filterlocation])
  }
  if(search.price.length>0){
    const filterprice =state.filter((ele)=>ele.price ===price)
    setState([...filterprice])
}

  }
  return (
  
    <div className='main'>
       <Header/>
      <h2>Search Properties for Rent</h2>
      <input type='text'
      className='text_feild'
       placeholder='Search...' onChange={changeHandler} 
       />
      <div className='Location_names'>
       <p>Location</p>
         
       <p>where</p>
       <p>price</p>
       <p>property type</p>
       <button onClick={finalSearch}>Serach</button>
       
      </div>
      <div className='grid'>
        {
             data.map((ele)=>{
            return <Cards eles={ele}/>
          })
        }
       
   
      
      </div>
      
    </div>
  )
}
export default MainPage;