import React from 'react'
import FavPage from './components/FavPage'

import MainPage from './components/MainComp/MainPage'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <> 

    <div className="App">
     
    </div>
   
       
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/fav' element={<FavPage/>}/>
        </Routes>
      
   
  
    </>
  )
}

export default App
