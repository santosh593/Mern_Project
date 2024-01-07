import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './frontend/pages/Home';
import Productdetail from './frontend/pages/Productdetail';
import Productlist from './frontend/pages/Productlist';
import Checkout from './frontend/pages/Checkout';
import Pagenotfound from './frontend/pages/Pagenotfound';
import Createproduct from './admin/pages/Productcreate';
import Adminproductlist from './admin/pages/Adminproductlist';
import Header from './admin/compnent/Header';
import Cart from './frontend/pages/Cart';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/productdetail" element={<Productdetail />}/>
        <Route path="/productlist" element={<Productlist />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/create/product" element={<Createproduct />}/>
        <Route path="/admin/product/list" element={<Adminproductlist />}/>
        <Route path="*" element={<Pagenotfound />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
