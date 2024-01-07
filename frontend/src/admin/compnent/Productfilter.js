const Productfilter = () =>{

    return <div className="filter-container">
    <label>Name:</label>
    <input
      type="text"
      name="name"
      
    />

    <label>Category:</label>
    <input
      type="text"
      name="category"
      
    />

    <label>Price (max):</label>
    <input
      type="number"
      name="price"
      
    />

    <button >Apply Filter</button>
  </div>
}

export default Productfilter;