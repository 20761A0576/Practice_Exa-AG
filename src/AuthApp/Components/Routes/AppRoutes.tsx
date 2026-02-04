import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";

const AppRoutes = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route index element={<Home />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cartItems" element={<CartItems />} />
                    <Route path="/products/:id" element={<ProductDetails />} /> */}
                </Route>
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;