import { Cart } from "./CartSlice";

const API_URL = "http://localhost:5000/cartItems";

export const getAllCartItems = async (): Promise<Cart[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch cart items");
    return res.json();
};

export const addCartItem = async (item: Omit<Cart, "id">): Promise<Cart> => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Failed to add item to cart");
    return res.json();
};

export const updateQuantity = async (item: Cart): Promise<Cart> => {
    console.log(item);
    const res = await fetch(`${API_URL}/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Failed to update quantity");
    return res.json();
};

export const removeCartItem = async (id: string): Promise<{ id: string }> => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to remove item from cart");
    return { id };
};

export const removeAllCartItems = async (): Promise<void> => {
    const res = await fetch(`${API_URL}`);
    if (!res.ok) throw new Error("Failed to fetch cart items");

    const items = await res.json();
    await Promise.all(
        items.map((item: { id: string }) =>
            fetch(`${API_URL}/${item.id}`, {
                method: "DELETE",
            })
        )
    );
};
