import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[]
}

const cartSlice=createSlice({
    name:"cartSLice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{

            const itemIndex=state.carts.findIndex((elm)=>elm.id===action.payload.id);
            if(itemIndex>=0){
                state.carts[itemIndex].qnty++;
            }else{
                action.payload.qnty=1;
                state.carts=[...state.carts,action.payload]
            }

          
        },
        removeFromCart:(state,action)=>{
            state.carts.splice(action.payload,1);
        }
    }
});

export const {addToCart,removeFromCart}=cartSlice.actions;

export default cartSlice.reducer