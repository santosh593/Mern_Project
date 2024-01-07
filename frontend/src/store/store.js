import { configureStore } from "@reduxjs/toolkit";
import  cartReducers from "../redux/cartSlice";
import  checkoutReducers from "../redux/checkoutSlice";
const store = configureStore({
    reducer:{
        cart:cartReducers,
        shippingdata:checkoutReducers
    }
});

export default store;