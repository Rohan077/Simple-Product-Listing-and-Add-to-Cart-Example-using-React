import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductsInCart } from "../../redux/reducers/cartSlice";
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import './ProductList.css'
import { getUser, logOut } from "../../redux/reducers/loginSlice";
import { fetchAsyncProducts, getAllProducts, productLoadingState } from "../../redux/reducers/productsSlice";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cart = useSelector(getProductsInCart);
  const products = useSelector(getAllProducts);
  const isLoading = useSelector(productLoadingState)
  const user = useSelector(getUser)


  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAsyncProducts())

  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="product-list">

      <nav className="nav-bar">
        <h1 onClick={() => {
          navigate("/home")
        }}>Ecomm Ekart</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="cart-container" >
          <FaShoppingCart className="cart-icon" onClick={() => {
            navigate("/cart");
          }} />
          <span className="cart-change-number" onClick={() => {
            navigate("/cart");
          }}>{cart.length}</span>
          <button className="logout" onClick={() => {
            dispatch(logOut())
            window.location.reload()
          }}>
            Log Out
          </button>
        </div>
      </nav>

      <p className="your-name">Hi <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{user.name}</span>, some featured products for you...</p>

      <div className="products">
        {filteredProducts.length === 0 ? (
          <h1>No match found</h1>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.image} alt={product.title} loading="lazy" placeholder='loading' />
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
              <p>Rating: {product.rating.rate} <FaStar style={{ color: 'orange' }} /></p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;