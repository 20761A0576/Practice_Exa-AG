import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, addProductAsync, updateProductAsync, deleteProductAsync } from "./ProductsService";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    image: string;
}

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch products";
            })
            .addCase(addProductAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductAsync.fulfilled, (state, action: PayloadAction<Product>) => {
                // state.products.push(action.payload);
                state.loading = false;
            })
            .addCase(addProductAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add product";
            })
            .addCase(updateProductAsync.fulfilled, (state, action) => {
                const index = state.products.findIndex(
                    p => p.id === action.payload.id
                );
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(deleteProductAsync.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    p => p.id !== action.payload
                );
            });
    },
});

export default productsSlice.reducer;
