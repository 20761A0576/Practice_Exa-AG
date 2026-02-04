import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
    Container,
    Header,
    Title,
    Nav,
    OrderList,
    List,
    Main,
    Footer,
    ActionButton
} from "./Layout.Styled";
import { useAuth } from "../Context/AuthContext";

const Layout = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    };

    return (
        <Container>
            <Header>
                <Title>Product Explorer</Title>
                <Nav>
                    <OrderList>
                        <List><Link to="/">Home</Link></List>
                        <List>
                            <ActionButton onClick={handleLogout}>
                                Logout
                            </ActionButton>
                        </List>
                    </OrderList>
                </Nav>
            </Header>

            <Main>
                <Outlet />
            </Main>

            <Footer>
                © {new Date().getFullYear()} Product Explorer. All rights reserved.
            </Footer>
        </Container>
    );
};

export default Layout;
