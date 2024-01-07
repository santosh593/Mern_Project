import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import { useState } from 'react';
import './checkout.css'
import { useDispatch } from 'react-redux';
import { addShippingData } from '../../redux/checkoutSlice';
const Checkout = () =>{

const [formdata, setFromData] = useState({
   name:"",
   email:"",
   mobileno:"",
   city:"",
   state:"",
   pincode:"",
   country:""
});

const inputHandle = (e) =>{
    setFromData({...formdata, [e.target.name]:e.target.value});
    console.log(formdata);
    
}
const dispatch = useDispatch();

const [error, setError] = useState("");

const submitHandle = (e) =>{
    e.preventDefault();
   const errors = {}
   if(formdata.name ==""){
     errors.name = "Name is required field";
   }
   if(formdata.email ==""){
        errors.email = "Email is required field";
    }
    if(formdata.mobileno ==""){
        errors.mobileno = "Mobile Number is required field";
    }
    if(formdata.city ==""){
        errors.city = "City is required field";
    }
    if(formdata.state ==""){
        errors.state = "State is required field";
    }
    if(formdata.pincode ==""){
        errors.pincode = "Pincode is required field";
    }
    if(formdata.country ==""){
        errors.country = "Country is required field";
    }
    setError(errors);
    
    if(Object.keys(error).length > 0){
        return false;
    }

    

    dispatch(addShippingData(formdata));

}

    return <div className='checkout-container'>
        <div className="shipping-address">
         <p>Shipping Address</p>
         <Form enctype="multipart/form-data"> 
            <Form.Group> 
                <Form.Label>Name:</Form.Label> 
                <Form.Control type="text" name="name" onChange={inputHandle}/> 
                <p>{error.name?error.name:""}</p>
            </Form.Group> 
            <Form.Group> 
                <Form.Label>Email:</Form.Label> 
                <Form.Control type="email" name="email" onChange={inputHandle}/> 
                <p>{error.email?error.email:""}</p>
            </Form.Group> 
            <Form.Group> 
                <Form.Label>Mobile Number:</Form.Label> 
                <Form.Control type="text" name="mobileno" onChange={inputHandle}/> 
                <p>{error.mobileno?error.mobileno:""}</p>
            </Form.Group>
            <Form.Group> 
                <Form.Label>City:</Form.Label> 
                <Form.Control type="text" name="city" onChange={inputHandle}/> 
                <p>{error.city?error.city:""}</p>
            </Form.Group>
            <Form.Group> 
                <Form.Label>State:</Form.Label> 
                <Form.Control type="text" name="state" onChange={inputHandle}/> 
                <p>{error.state?error.state:""}</p>
            </Form.Group> 
            <Form.Group> 
                <Form.Label>Pincode:</Form.Label> 
                <Form.Control type="text" name="pincode" onChange={inputHandle} /> 
                <p>{error.pincode?error.pincode:""}</p>
            </Form.Group>
            <Form.Group> 
                <Form.Label>Country:</Form.Label> 
                <Form.Control type="text" name="country" onChange={inputHandle} /> 
                <p>{error.country?error.country:""}</p>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitHandle}> 
            Click here to submit form 
            </Button> 
        </Form> 
        </div>
        <div className='payment-section'>

        </div>
    </div>
}

export default Checkout;