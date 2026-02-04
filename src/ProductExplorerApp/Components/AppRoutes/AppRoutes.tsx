import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Products from "../../Pages/Products/Products";
import ProductManager from "../../Pages/Products/ProductManager/ProductManager";
import Cart from "../../Pages/Products/Cart/CartPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products" element={<Products />} />
                    <Route path="/addProduct" element={<ProductManager />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;