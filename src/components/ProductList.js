import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice';

const ProductList = ({ cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading,setisLoading]=useState(true);

  const dispatch=useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }finally{
        setisLoading(false)
      }
    };

    fetchProducts();
  }, []);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (isLoading?<div><h1>Loading...</h1></div>:
    <div className="product-list">
      <h1>Product List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="products">
        {filteredProducts.length === 0 ? (
          <h1>No match found</h1>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>Rating: {product.rating.rate}</p>
              <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
