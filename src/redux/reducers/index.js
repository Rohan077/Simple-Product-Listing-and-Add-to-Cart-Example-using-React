import { combineReducers } from '@reduxjs/toolkit';

import cart from './cartSlice'

import products from './productsSlice'

import login from './loginSlice'

export default combineReducers({
    cart,
    products,
    login
})