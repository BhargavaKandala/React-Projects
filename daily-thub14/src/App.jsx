import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    size: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', brand: '', size: '', price: '', image: null });
  };

  const handleClear = () => {
    setFormData({ name: '', brand: '', size: '', price: '', image: null });
  };

  return (
    <div className="container">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
        <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

function ProductCards({ data }) {
  return (
    <div className="cards">
      {data.length === 0 ? (
        <p>No products submitted yet.</p>
      ) : (
        data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt="Product" />
            <h3>{item.name}</h3>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Size:</strong> {item.size}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Welcome to the Product App</h2>
      <p>Use the navigation above to add or view products.</p>
    </div>
  );
}

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/products">View Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<ProductForm onSubmit={handleFormSubmit} />} />
        <Route path="/products" element={<ProductCards data={submittedData} />} />
        <Route path="*" element={<div className="container"><h2>404 - Page Not Found</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;