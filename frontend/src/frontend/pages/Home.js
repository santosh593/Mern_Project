import axios from 'axios';
import ImageDetail from '../../admin/compnent/ImageDetail';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
const Home = () =>{
    
    const dispatch = useDispatch();
   // const cartItem = useSelector((state)=>state.items.cart);
    const [product,setProduct] =useState("");
    const productlistApi = async() =>{
        const finaldata= await axios.get('http://localhost:11000/api/v1/getproduct');
           setProduct(finaldata.data.products);
       }

       useEffect(()=>{
            productlistApi();
        },[]);
    return <div className='product-container'>

{
   product?product.map((data,index)=>{
     return <div key={index} className="product-data">
     
      <ImageDetail image={data.image} />
      <p>{data.name}</p>
      <p>Rs: {data.price}</p>
      <button onClick={()=>{dispatch(addToCart(data))}}>Add To Cart</button>
   </div>
  }):"no record found"

}
    </div>
}

export default Home;