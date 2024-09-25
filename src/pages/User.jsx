import React, { useState, useEffect } from "react";
import axios from "axios";
import '../pages/User.css';
import { useNavigate} from 'react-router-dom';

const backend_url = "https://parisudhambackend.onrender.com";



function User() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  };
  
  const handleHomeClick=()=>{
    navigate('/')
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backend_url}/getProducts`);
        setProducts(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex >= 0) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return { 
            ...item, 
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.ProductPrice 
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { 
        ...product, 
        quantity: 1, 
        totalPrice: product.ProductPrice 
      }]);
    }
  };

  // Function to increase quantity
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item._id === productId) {
        return { 
          ...item, 
          quantity: item.quantity + 1, 
          totalPrice: (item.quantity + 1) * item.ProductPrice 
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to decrease quantity
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item._id === productId) {
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          return { 
            ...item, 
            quantity: newQuantity, 
            totalPrice: newQuantity * item.ProductPrice 
          };
        }
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove items with quantity 0
    setCart(updatedCart);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
  };

  // Function to calculate total cart price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  // Function to place order
  const orderPlace = () => {
    const message = cart.map(item => 
      `*${item.ProductName}* - Quantity: ${item.quantity}, Total Price: Rs.${item.totalPrice}`
    ).join('%0A');

    const totalPrice = calculateTotalPrice();
    const whatsappMessage = `Order Details:%0A${message}%0A%0A*Total Price:* Rs.${totalPrice}`;

    const phoneNumber = "9188707358";
    
    
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div>
        <div className="navbar">
        <div className="logo"> 
           <p>PARISUDHAM COTTON INDUSTRIES</p>
        </div>
        <div className="navbar-menu">
        <button onClick={handleHomeClick}>HOME</button>
        <button onClick={handleShopClick}>SHOP</button>
        
        </div>
        </div>
      <div className="inside">
        <div className="left">
          <h1>SHOP</h1>
          <div className="box">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="product">
                  <h2>{product.ProductName}</h2>
                  <p>Price: Rs.{product.ProductPrice}</p>
                  {product.ProductImage ? (
                    <img 
                      src={product.ProductImage} 
                      alt={product.ProductName} 
                      className="product-image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <button onClick={() => addToCart(product)}>ADD TO CART</button>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
        <div className="right">
          <h1>SHOPPING CART</h1>
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <h4>{item.ProductName}</h4>
                  <p>
                    <button onClick={() => decreaseQuantity(item._id)}>-</button>
                    {item.quantity}
                    <button onClick={() => increaseQuantity(item._id)}>+</button>
                  </p>
                  <h5>Total Price: Rs.{item.totalPrice}</h5>
                  {item.ProductImage ? (
                    <img 
                      src={item.ProductImage} 
                      alt={item.ProductName} 
                      className="cart-product-image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <button onClick={() => removeFromCart(item._id)}>X</button>
                </div>
              ))}
              <h2>Total Cart Price: Rs.{calculateTotalPrice()}</h2>
              <button className="order" onClick={orderPlace}>PLACE ORDER</button>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
