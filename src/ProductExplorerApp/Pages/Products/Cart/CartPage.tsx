import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store";
import { CartContainer, Empty, CartCard, ButtonGroup, Button, Image, Info, Title, Price, RemoveButton, CartFooter, Total, PlaceOrderButton } from "./Cart.Styled";
import { removeFromCart, removeAllCart, fetchAllCart, updateToCart, Cart } from "../../../Components/Redux/CartData/CartSlice";
import { fetchProducts } from "../../../Components/Redux/ProductsData/ProductsService";
import { toast } from "react-toastify";

const CartPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { CartItems } = useSelector((state: RootState) => state.CartData);
    const { products } = useSelector((state: RootState) => state.ProductsData);

    const cartProducts = useMemo(() => {
        return CartItems.map(cartItem => {
            const product = products.find(p => p.id === cartItem.product_id);
            return product ? { ...product, cartId: cartItem.id, quantity: cartItem.quantity } : null;
        }).filter(Boolean);
    }, [CartItems, products]);

    const totalCost = useMemo(() => {
        return cartProducts.reduce(
            (sum: number, product: any) => sum + (product.price * product.quantity),
            0
        );
    }, [cartProducts]);


    const handleRemove = (cartId: string) => {
        dispatch(removeFromCart(cartId));
    };

    const handlePlaceOrder = () => {
        if (!cartProducts.length) return;
        dispatch(removeAllCart());
        toast.success("Order Placed Successfully");
    };

    const handleQuantity = (isInc: boolean, item: Cart) => {
        if (isInc) {
            dispatch(updateToCart({ ...item, quantity: item.quantity + 1 }));
        } else {
            dispatch(updateToCart({ ...item, quantity: item.quantity - 1 }));
        }
    }

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchAllCart());
    }, [dispatch])

    return (
        <>
            <CartContainer>
                {cartProducts.length === 0 && <Empty>Cart is empty</Empty>}

                {cartProducts.map((product: any) => (
                    <CartCard key={product.cartId}>
                        {product.image && <Image src={product.image === "none" ? "https://img.freepik.com/premium-photo/assemblage-contemporary-gadgets-electronic-devices-showcased-3d-illustration-against_1045886-2213.jpg?w=2000" : product.image} />}
                        <Info>
                            <Title>{product.name}</Title>
                            <Price>${product.price}</Price>
                            <ButtonGroup>
                                <Button
                                    disabled={product.quantity <= 1}
                                    onClick={() => handleQuantity(false, { id: product.cartId, product_id: product.id, user_id: "user1", quantity: product.quantity })}
                                >-
                                </Button>
                                <Title>{product.quantity || " 0 "}</Title>
                                <Button
                                    onClick={() => handleQuantity(true, { id: product.cartId, product_id: product.id, user_id: "user1", quantity: product.quantity })}
                                >+
                                </Button>
                            </ButtonGroup>
                            <RemoveButton onClick={() => handleRemove(product.cartId)}>
                                Remove
                            </RemoveButton>
                        </Info>
                    </CartCard>
                ))}
            </CartContainer>
            {cartProducts.length > 0 && (
                <CartFooter>
                    <Total>Total: ${totalCost.toFixed(2)}</Total>
                    <PlaceOrderButton onClick={handlePlaceOrder}>
                        Place Order
                    </PlaceOrderButton>
                </CartFooter>
            )}
        </>
    );
};

export default CartPage;
