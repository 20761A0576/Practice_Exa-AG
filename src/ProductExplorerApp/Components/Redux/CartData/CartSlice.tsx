import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getAllCartItems, addCartItem, removeCartItem, removeAllCartItems, updateQuantity } from "./CartService";

export interface Cart {
    id: string;
    product_id: string;
    user_id: string;
    quantity: number;
}

interface CartState {
    CartItems: Cart[];
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    CartItems: [],
    loading: false,
    error: null,
};

export const fetchAllCart = createAsyncThunk<Cart[]>(
    "cart/fetchAllCart",
    async (_, thunkAPI) => {
        try {
            return await getAllCartItems();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addToCart = createAsyncThunk<Cart, Omit<Cart, "id">>(
    "cart/addToCart",
    async (item, thunkAPI) => {
        try {
            return await addCartItem(item);
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateToCart = createAsyncThunk<Cart, Cart>(
    "cart/udateToCart",
    async (item, thunkAPI) => {
        try {
            return await updateQuantity(item);
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeFromCart = createAsyncThunk<{ id: string }, string>(
    "cart/removeFromCart",
    async (id, thunkAPI) => {
        try {
            return await removeCartItem(id);
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeAllCart = createAsyncThunk<void, void>(
    "cart/removeAll",
    async (_, thunkAPI) => {
        try {
            await removeAllCartItems();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchAllCart.fulfilled, (state, action: PayloadAction<Cart[]>) => {
            state.loading = false;
            state.CartItems = action.payload;
        });
        builder.addCase(fetchAllCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        builder.addCase(addToCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addToCart.fulfilled, (state, action: PayloadAction<Cart>) => {
            state.loading = false;
            state.CartItems.push(action.payload);
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        builder.addCase(updateToCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateToCart.fulfilled, (state, action: PayloadAction<Cart>) => {
            state.loading = false;
            const index = state.CartItems.findIndex(
                item => item.id === action.payload.id
            );
            if (index !== -1) {
                state.CartItems[index] = action.payload;
            }
        });
        builder.addCase(updateToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        builder.addCase(removeFromCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(removeFromCart.fulfilled, (state, action: PayloadAction<{ id: string }>) => {
            state.loading = false;
            state.CartItems = state.CartItems.filter((item) => item.id !== action.payload.id);
        });
        builder.addCase(removeFromCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(removeAllCart.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(removeAllCart.fulfilled, (state) => {
            state.loading = false;
            state.CartItems = [];
        });

        builder.addCase(removeAllCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default CartSlice.reducer;
