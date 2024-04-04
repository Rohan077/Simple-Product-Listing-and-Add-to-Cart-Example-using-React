import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fakeStoreApi from '../../api/fakeStoreApi';

export const fetchAsyncProducts=createAsyncThunk('products/fetchAsyncProducts', async()=>{
    const response=await fakeStoreApi.get('/products')
    .catch((error)=>{
        console.log("Error: ",error)
    });
    return response.data;
})

export const fetchAsyncProductDetail=createAsyncThunk('products/fetchAsyncProductDetail', async(id)=>{
  const response=await fakeStoreApi.get(`/products/${id}`)
  .catch((error)=>{
      console.log("Error: ",error)
  });
  return response.data;
})



const initialState={
    products:[],
    selectedProduct:{},
}

const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
      
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAsyncProducts.pending, (state) => {
            state.loading=true
            console.log('loading products...')
          })
          .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            console.log('succeeded onloading...')
            state.loading=false
            state.products = action.payload;
          })
          .addCase(fetchAsyncProducts.rejected, () => {
            console.log('rejected....')
          })



          .addCase(fetchAsyncProductDetail.pending, (state) => {
            state.loading=true
            console.log('loading products...')
          })
          .addCase(fetchAsyncProductDetail.fulfilled, (state, action) => {
            console.log('succeeded onloading...')
            state.loading=false
            state.selectedProduct = action.payload;
          })
          .addCase(fetchAsyncProductDetail.rejected, () => {
            console.log('rejected....')
          });
      },

})

export const getAllProducts=(state)=>state.products.products
export const getSelectedProductDetail=(state)=>state.products.selectedProduct
export const productLoadingState=(state)=>state.products.loading
export default productsSlice.reducer;