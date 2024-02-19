// Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
    
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };


  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <div className="cart-item">
                  <img src={product.image} alt={product.title} />
                  <div className="item-details">
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
          <button onClick={clearCart}>Clear Cart</button>
          <button className="order-now" onClick={()=>alert(`Order of ${calculateTotal()}$ has been made!`)}>Order Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
