import React,{useState} from 'react'
import Data from '../Data'

const Cards = () => {
    const [home,setHome] =useState(Data)
    const [search,setSearch]=useState()
    
  
  return (
    <>    
    <div className='card'>
        <h1>Search properties for rent</h1>
        <input type='text' className='text_field'
        placeholder=' Search name...' 
        value={search}
         onChange={(e)=>setSearch(e.target.value)}/>
        <div>
            
        </div>
        <div className='row'>

              {
                home.filter((ele)=>ele.name.toLowerCase().includes(search)).map((ele)=>(
                  <> 
                    <h2 key={ele.id}></h2>
                    <div className='container'>
                     
                    <img src={ele.img}  style={{width:"100px"}} />
                    <h4>{ele.price}</h4>
                    <div>
                    <h3>{ele.name}</h3>
                    </div>
                  
                    </div>
                  
                
                  </>
               
                ))

              }
        </div>
   </div>
   </>
  )
}

export default Cards;