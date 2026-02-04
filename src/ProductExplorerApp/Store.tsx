import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Components/Redux/ProductsData/ProductSlice";
import CartReducer from "./Components/Redux/CartData/CartSlice";

export const Store = configureStore({
  reducer: {
    ProductsData: ProductsReducer,
    CartData: CartReducer
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
