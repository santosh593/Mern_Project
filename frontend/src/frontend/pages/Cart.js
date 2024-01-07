import { useDispatch, useSelector } from "react-redux"
import ImageDetail from "../../admin/compnent/ImageDetail";
import { removeCart, updateCart } from "../../redux/cartSlice";
import { useEffect } from "react";

const Cart = () =>{

const cartItems = useSelector((state)=>state.cart.items);
const dispatch = useDispatch()
const removeItem = (id) =>{
    dispatch(removeCart(id));
}
const total = useSelector((state)=>state.cart.cartamount);
const increment = (id,qty) =>{
    const qtydata = (qty +1);
    dispatch(updateCart({id,qtydata}));
}
const decrement = (id,qty) =>{
    const qtydata = (qty -1);
    dispatch(updateCart({id,qtydata}));
}
const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
};

    return <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item,index) => (
        <tr key={index}>
          <td>
            <ImageDetail image={item.image} />
            {item.name}</td>
          <td>
            <button onClick={()=>increment(item._id,item.qty)}>+</button>{item.qty}<button onClick={()=>decrement(item._id,item.qty)}>-</button>
          </td>
          <td>${item.price}</td>
          <td>${item.qty * item.price}</td>
          <td>
            <button onClick={() => removeItem(item._id)}>Remove</button>
          </td>
        </tr>
      ))}
      <tr>
        <td>Total Price:</td>
        <td>{calculateTotalPrice()}</td>
      </tr>
    </tbody>
  </table>
}

export default Cart;