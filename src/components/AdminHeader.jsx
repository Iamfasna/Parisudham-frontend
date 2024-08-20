import React, { useState } from 'react';
import axios from 'axios';
import './AdminHeader.css';

function AdminHeader() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const addProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);

    try {
      const response = await axios.post('http://localhost:3000/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert('Product added successfully');
        window.location.reload(false);
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      alert('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='main'>
      <div className='header'>
        <h2>PARISUDHAM COTTON INDUSTRIES</h2>
      </div>
      <div className='product-add'>
        <form onSubmit={addProduct}>
          <label>Product Name</label>
          <input
            type='text'
            id='productName'
            name='productName'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label>Product Price</label>
          <input
            type='number'
            id='productPrice'
            name='productPrice'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />

          <label>Product Image</label>
          <input
            type='file'
            id='productImage'
            name='productImage'
            onChange={(e) => setProductImage(e.target.files[0])}
            required
          />
          <button type='submit'>Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AdminHeader;
