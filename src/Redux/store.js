import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './CartReducer'

 const store =configureStore({
    reducer:{
              CartReducer:CartReducer
    }
})
export default store