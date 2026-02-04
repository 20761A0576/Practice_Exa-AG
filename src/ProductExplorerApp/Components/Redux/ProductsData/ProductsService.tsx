import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./ProductSlice";


export const addProductAsync = createAsyncThunk<Product, Product>(
    "products/addProduct",
    async (product) => {
        const response = await fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data: Product = await response.json();
        return data;
    }
);

export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetchProducts",
    async () => {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        return data;
    }
);

export const updateProductAsync = createAsyncThunk<Product, Product>(
    "products/updateProduct",
    async (product) => {
        const response = await fetch(
            `http://localhost:5000/products/${product.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );
        const data: Product = await response.json();
        return data;
    }
);

export const deleteProductAsync = createAsyncThunk<string, string>(
    "products/deleteProduct",
    async (productId) => {
        await fetch(`http://localhost:5000/products/${productId}`, {
            method: "DELETE",
        });
        return productId;
    }
);