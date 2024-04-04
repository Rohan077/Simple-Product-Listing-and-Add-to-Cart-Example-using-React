import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProductDetail, getSelectedProductDetail, productLoadingState } from '../../redux/reducers/productsSlice';
import { addToCart, getProductsInCart } from '../../redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart,FaStar } from 'react-icons/fa';
import './ProductDetails.css'

const ProductDetails = () => {

  const selectedProduct = useSelector(getSelectedProductDetail)

  const cart = useSelector(getProductsInCart)

  const isLoading=useSelector(productLoadingState)

  const dispatch = useDispatch()
  const { productId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAsyncProductDetail(productId))
  }, [dispatch, productId])

  return (
    isLoading?
    <h1>Loading...</h1>:
      <div>

        <nav className="nav-bar">
          <h1 onClick={() => {
            navigate("/home")
          }}>Ecomm Ekart</h1>

          <div className="cart-container" >
            <FaShoppingCart className="cart-icon" onClick={() => {
              navigate("/cart");
            }} />
            <span className="cart-change-number" onClick={() => {
              navigate("/cart");
            }}>{cart.length}</span>
          
            <button onClick={() => navigate("/home")}>
          Back to home
        </button>
          </div>
        </nav>

        <div className="product-detail">
            <div className='product-detail-left'><h2>{selectedProduct.title}</h2>
        <p><span style={{fontWeight:'bold'}}>Description:</span> {selectedProduct.description}</p>
        <p><span style={{fontWeight:'bold'}}>Category:</span> {selectedProduct.category}</p>
        <p><span style={{fontWeight:'bold'}}>Rating:</span> {selectedProduct.rating?.rate} <FaStar style={{color:'orange'}}/></p>
        
          </div>
        
        <div className="product-detail-right">
          <img src={selectedProduct.image} alt={selectedProduct.title} loading="lazy" placeholder='loading' />
        <button onClick={() => dispatch(addToCart(selectedProduct))}>
          Add to Cart
        </button>
        
        </div>
        </div>
          
      </div> 
  )
}

export default ProductDetails