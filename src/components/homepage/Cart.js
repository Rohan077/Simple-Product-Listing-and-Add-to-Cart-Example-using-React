// Cart.js
import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
 
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
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
                    <button onClick={() => dispatch(removeFromCart(product))}>
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h1>Total: ${calculateTotal()}</h1>
          </div>
          <button
            className="order-now"
            onClick={() => {
              alert(`Order of ${calculateTotal()}$ has been made!`);
              dispatch(emptyCart());
            }}
          >
            Order Now
          </button>
        </>
      )}
      <button className="logout" onClick={() => navigate("/login")}>
        Logout
      </button>
    </div>
  );
};
 
export default Cart;