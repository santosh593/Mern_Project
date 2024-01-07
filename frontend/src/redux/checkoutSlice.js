import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:'checkout',
    initialState:{
        shippingdata:""
    },
    reducers:{
        addShippingData:(state,action)=>{
              state.shippingdata = action.payload;
        }
    }
});

export const {addShippingData} = checkoutSlice.actions;
export default checkoutSlice.reducer;