import {createSlice} from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        cartamount:0
    },
    reducers:{
        addToCart:(state,action)=>{

            const existingItem = state.items.find(item => item._id === action.payload._id);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
        },
        removeCart:(state,action)=>{
            state.items = state.items.filter(item => item._id !== action.payload);
        },
        updateCart:(state,action)=>{
            const { id, qtydata } = action.payload;
            const itemToUpdate = state.items.find(item => item._id === id);

            console.log(itemToUpdate);

            if (itemToUpdate) {
                itemToUpdate.qty = qtydata;
            }
        }
    }
});

export const { addToCart, removeCart, updateCart} = cartSlice.actions;
export default cartSlice.reducer;



