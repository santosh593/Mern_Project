import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import './admin.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Createproduct = () =>{

    
    const navigate = useNavigate();
    //set error

    const [error,setError] = useState("");
    const [image,setImage] = useState("");
    const [formData, setFromData] = useState({
        name:"",
        sku:"",
        category:"",
        price:"",
        stock:"",
        image:[],
        bestseller:"yes",
        feature:"yes",
        status:"active",
    });
    const inputHandle = (e) =>{
        setFromData({...formData,[e.target.name]:e.target.value});
        setError({...error,[e.target.name]:""})
    }


    const inputHandleImage = (e) =>{
        
        
      const imagedata = e.target.files;
        let fileData = [];
        for(let i =0; i<imagedata.length; i++){
          fileData.push(imagedata[i]);
        }
        setImage(fileData)
        console.log(fileData)
    }
    

    const submitHandle = async(e) =>{
        e.preventDefault();
        const errors={};
        if(formData.name===""){
          errors.name="Product Name is required Field";
        }

        if(formData.sku===""){
            errors.sku="Product SKU is required Field";
        }

        if(formData.category===""){
            errors.category="Product category is required Field";
        }

        if(formData.price===""){
            errors.price="Product price is required Field";
        }

        if(formData.stock===""){
            errors.stock="Product stock is required Field";
        }

        if(formData.status===""){
            errors.name="Product status is required Field";
        }

        setError(errors);
        if(Object.keys(errors).length > 0){
          return false;
        }
        console.log(image)

      const data = new FormData();
      data.append("name",formData.name)
      data.append("sku",formData.sku)
      data.append("price",formData.price)
      data.append("stock",formData.stock)
      data.append("category",formData.category)
      for (let i = 0; i < image.length; i++) {
        data.append('image', image[i])
      }
     
      
console.log(data);
      const config = {
        "Content-Type":"multipart/form-data"
      }
      await axios.post("http://localhost:11000/api/v1/createproduct",data , {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
      //  console.log(formData);
      return navigate('/admin/product/list');
    }

    return <div className='product-form-container'
    style={{ display: 'block',  
    width: 700,  
    padding: 30,
        }}> 
        <h4>Create Product</h4>
        <Form enctype="multipart/form-data"> 
            <Form.Group> 
                <Form.Label>Product name:</Form.Label> 
                <Form.Control type="text" name="name" onChange={inputHandle}/> 
                <p>{error.name?error.name:""}</p>
            </Form.Group> 
            <Form.Group> 
                <Form.Label>Sku:</Form.Label> 
                <Form.Control type="email" name="sku" onChange={inputHandle}/> 
                <p>{error.sku?error.sku:""}</p>
            </Form.Group> 
            <Form.Group> 
                <Form.Label>Category:</Form.Label> 
                <Form.Control type="text" name="category" onChange={inputHandle}/> 
                <p>{error.category?error.category:""}</p>
            </Form.Group>
            <Form.Group> 
                <Form.Label>Price:</Form.Label> 
                <Form.Control type="number" name="price" onChange={inputHandle}/> 
                <p>{error.price?error.price:""}</p>
            </Form.Group>
            <Form.Group> 
                <Form.Label>Stock:</Form.Label> 
                <Form.Control type="number" name="stock" onChange={inputHandle}/> 
                <p>{error.stock?error.stock:""}</p>
            </Form.Group> 
            <Form.Group> 
                <Form.Label>Image:</Form.Label> 
                <Form.Control type="file" name="image" onChange={inputHandleImage} multiple/> 
            </Form.Group>
            <Form.Group> 
                <Form.Label>Featured:</Form.Label> 
                <Form.Select  name="feature" onChange={inputHandle}> 
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </Form.Select>  
            </Form.Group>
            <Form.Group> 
                <Form.Label>Beastseller:</Form.Label> 
                <Form.Select  name="bestseller" onChange={inputHandle}> 
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </Form.Select>
            </Form.Group>
            <Form.Group> 
                <Form.Label>Status:</Form.Label> 
                <Form.Select  name="status" onChange={inputHandle}> 
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </Form.Select> 
                <p>{error.status?error.status:""}</p>
            </Form.Group>
                <Button variant="primary" type="submit" onClick={submitHandle}> 
                Click here to submit form 
                </Button> 
        </Form> 
    </div> 
}

export default Createproduct