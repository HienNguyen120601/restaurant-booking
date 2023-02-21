import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../product/productSlice';



const store = configureStore({
    reducer: {
        product: productSlice.reducer,

    }
});
export default store;