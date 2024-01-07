import { useEffect, useState } from "react";
import React from 'react';
import Table from 'react-bootstrap/Table'
import ImageDetail from "../compnent/ImageDetail";
import Productfilter from "../compnent/Productfilter";
import axios from 'axios';

const Adminproductlist = () =>{

    const [product,setProduct] =useState("");
    const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

    const productlistApi = async() =>{
     const finaldata= await axios.get('http://localhost:11000/api/v1/getproduct',{
      params: {
        query: searchQuery,
        page: currentPage,
      },});
      console.log(searchQuery,currentPage,product);
        setProduct(finaldata.data.products)
        setTotalPages(finaldata.data.totalPages);
    }

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    const edit = (id) =>{
      alert(id);
    }

    const deleteProduct = async(id) =>{
        await   fetch('http://localhost:11000/api/v1/deleteproduct/'+id, 
        {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        productlistApi();
    }

    useEffect(()=>{
        productlistApi();
    },[searchQuery, currentPage]);

    return (<div className="">
      <div className="filter-container">
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
       <Table stripped bordered hover size="sm">
  <thead>
    <tr>
      <th width="170">Product Name</th>
      <th width="170">Sku</th>
      <th width="170">Categroy</th>
      <th width="170">Price</th>
      <th width="870">Image</th>
      <th width="1950">Stock</th>
      <th width="1950">Action</th>
    </tr>
  </thead>
  <tbody>
  {
   product?product.map((data,index)=>{
     return  <tr key={index}>
     <td>{data.name}</td>
     <td>{data.sku}</td>
     <td>{data.category}</td>
     <td>{data.price}</td>
     <td>
      <ImageDetail image={data.image} />

      </td>
     <td>{data.stock}</td>
     <td><button onClick={()=>{edit(data._id)}}>Edit</button><button onClick={()=>{deleteProduct(data._id)}}>Delete</button></td>
   </tr>
  }):"no record found"

}
    
  </tbody>
</Table>
<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
    </div>)
}

export default Adminproductlist;