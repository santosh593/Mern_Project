import { Link } from "react-router-dom";
import "./Headercss.css";
import { useSelector } from "react-redux"

const Header = () =>{
  const cartItems = useSelector((state)=>state.cart.items);
    return <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin/product/list">Product List</Link></li>
        <li><Link to="/create/product">Add Product</Link></li>
        <li><Link to="/cart">Cart{cartItems.length}</Link></li>
      </ul>
    </nav>
  </header>
}

export default Header;