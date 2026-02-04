import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { RootState } from "../../Store";
import { useNavigate } from "react-router-dom";
import { fetchProducts, deleteProductAsync } from "../../Components/Redux/ProductsData/ProductsService";
import { Product } from "../../Components/Redux/ProductsData/ProductSlice";
import { Header, AddButton, FilterMenu, CategoryLabel, ClearBlock, SubTitle, FilterButton, ClearButton, ApplyButton, Button, SubCard, SubBlock, SearchInput, Grid, Card, ProductImage, CardBody, Title, Category, Price, Description, Stock, ButtonGroup, ActionButton } from "./Products.Styled";
import { addToCart, Cart, fetchAllCart, removeFromCart } from "../../Components/Redux/CartData/CartSlice";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaFilter } from 'react-icons/fa';

interface Filters {
    categories: string[];
    priceRange: [number, number];
    filterApplied: boolean;
}

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { products, loading, error: productError } = useSelector((state: RootState) => state.ProductsData);
    const { CartItems, error } = useSelector((state: RootState) => state.CartData);
    const [query, setQuery] = useState<string>("");
    const [filterOpen, setFilterOpen] = useState<boolean>(false);
    const toggleFilter = useCallback(() => {
        setFilterOpen((prev) => !prev);
    }, []);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
    }, [setQuery])

    const handleClick = () => {
        navigate("/addProduct");
    }

    const handleUpdate = (item: Product) => {
        navigate("/addProduct", {
            state: { product: item, isEdit: true },
        });
    };

    const handleRemove = (id: string) => {
        if (!window.confirm("Are you sure want to delete")) {
            return;
        }
        dispatch(deleteProductAsync(id));
    };

    const [filters, setFilters] = useState<Filters>({
        categories: [],
        priceRange: [0, 100000],
        filterApplied: false
    });

    const categoriesList = useMemo(() => {
        const categories = Array.from(new Set(products.map((item) => item.category)));
        return categories;
    }, [query, handleUpdate, handleRemove]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                filterOpen &&
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setFilterOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [filterOpen]);

    const filterProducts = useMemo(() => {
        const searchQuery: string = query?.trim().toLowerCase() || "";
        const data = products.filter(({ image, id, ...item }) =>
            Object.values(item).some(value =>
                value
                    .toString()
                    .toLowerCase()
                    .includes(searchQuery)
            )
        );
        if (filters.filterApplied) {
            return data.filter((item) => filters.categories.includes(item.category) && (item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]));
        }
        return data;
    }, [query, handleUpdate, handleRemove, filters]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddCart = (id: string) => {
        dispatch(addToCart({ product_id: id, user_id: "user1", quantity: 1 }));
    };

    const handleRemoveCart = (productId: string) => {
        const cartItem = CartItems.find(
            (item) => item.product_id === productId && item.user_id === "user1"
        );
        if (cartItem) {
            dispatch(removeFromCart(cartItem.id));
        } else {
            console.warn("Cart item not found for removal");
        }
    };

    useEffect(() => {
        dispatch(fetchAllCart());
    }, [dispatch])

    const CartComponent = useCallback(({ id }: { id: string }) => {
        const inCart = CartItems.some(
            (item) => item.product_id === id && item.user_id === "user1"
        );
        if (!inCart) return (
            <ButtonGroup>
                <ActionButton onClick={() => handleAddCart(id)}>
                    Add to Cart
                </ActionButton>
            </ButtonGroup>
        );
        return (
            <ButtonGroup>
                <ActionButton onClick={handleGoToCart}>
                    Go to Cart
                </ActionButton>
                <ActionButton $variant="delete" onClick={() => handleRemoveCart(id)}>
                    Remove From Cart
                </ActionButton>
            </ButtonGroup>
        );
    }, [CartItems]);

    const handleGoToCart = () => {
        navigate("/cart");
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error])

    if (loading) return <p>Loading...</p>;
    if (productError) return <p>Error: {error}</p>;

    return (
        <>
            <Header>
                <Title>Product Explorer</Title>
                <SubBlock>
                    <SearchInput
                        type="search"
                        value={query}
                        placeholder="Search city..."
                        onChange={handleChange}
                    />
                    <AddButton onClick={handleClick}>Add Product</AddButton>
                    <FilterButton ref={buttonRef} onClick={toggleFilter}>{FaFilter({ size: 18 })}</FilterButton>
                    <FilterMenu ref={menuRef} open={filterOpen}>
                        <ClearBlock>
                            <Title>Products Filter</Title>
                            <ClearButton onClick={() => {
                                setFilters({
                                    categories: [],
                                    priceRange: [0, 100000],
                                    filterApplied: false
                                })
                                setFilterOpen(false);
                            }}>clear</ClearButton>
                        </ClearBlock>
                        <div>
                            <SubTitle>Categories</SubTitle>
                            {categoriesList.map((cat) => (
                                <CategoryLabel key={cat}>
                                    <input
                                        type="checkbox"
                                        value={cat}
                                        checked={filters.categories.includes(cat)}
                                        onChange={(e) => {
                                            const selected = e.target.value;
                                            setFilters((prev) => ({
                                                ...prev,
                                                categories: prev.categories.includes(selected)
                                                    ? prev.categories.filter((c) => c !== selected)
                                                    : [...prev.categories, selected],
                                            }));
                                        }}
                                    />
                                    {cat}
                                </CategoryLabel>
                            ))}
                        </div>
                        <div>
                            <SubTitle>Price Range</SubTitle>
                            <input
                                type="range"
                                min={0}
                                max={100000}
                                value={filters.priceRange[1]}
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        priceRange: [prev.priceRange[0], Number(e.target.value)],
                                    }))
                                }
                            />
                            <div>
                                ${filters.priceRange[0]} - ${filters.priceRange[1]}
                            </div>
                        </div>
                        <ApplyButton onClick={() => setFilters((prev) => ({ ...prev, filterApplied: true }))}>Apply</ApplyButton>
                    </FilterMenu>
                </SubBlock>
            </Header>
            <Grid>
                {filterProducts.map((item) => (
                    <Card key={item.id}>
                        <ProductImage src={item.image === "none" ? "https://thumbs.dreamstime.com/z/collection-icons-representing-popular-electronic-devices-such-as-smartphones-laptops-tablets-gaming-consoles-set-various-271590826.jpg" : item.image} alt={item.name} />
                        <CardBody>
                            <SubCard>
                                <Title>{item.name}</Title>
                                <ButtonGroup>
                                    <Button onClick={() => handleUpdate(item)}>{FaEdit({ size: 18, color: "#4CAF50" })}</Button>
                                    <Button onClick={() => handleRemove(item.id)}>{FaTrash({ size: 18, color: "#F44336" })}</Button>
                                </ButtonGroup>
                            </SubCard>
                            <Category>{item.category}</Category>
                            <Price>${item.price}</Price>
                            <Description>{item.description}</Description>

                            <Stock $low={item.stock < 5}>
                                {item.stock < 5 ? "Low stock" : `In stock: ${item.stock}`}
                            </Stock>
                            <CartComponent id={item.id} />
                        </CardBody>
                    </Card>
                ))}
            </Grid>
        </>
    );
}

export default Products;