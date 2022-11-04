import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cartValues:[]
}

const cartReducer=createSlice({
   name:"cartReducer",
   initialState,
   reducers:{
         addFavPage:(state,action)=>{
            state.cartValues.push(action.payload)
            console.log(state.cartValues)
            //   const itemIndex =state.cartValues.findIndex((ele)=>ele.id===action.payload.id)
            // //   if(itemIndex>=0){
            //        state[cartValues].qunty=+1
            //   }else{
            //    const temp =(action.payload.)
            //   }
         }
   }

})
 export const {addFavPage} =cartReducer.actions;
export default cartReducer.reducer