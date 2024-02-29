import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  cart: [],
};
 
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
      };
      state.cart.push(product);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});
 
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
 
export default cartSlice.reducer;
 