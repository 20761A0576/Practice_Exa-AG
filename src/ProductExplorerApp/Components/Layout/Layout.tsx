import React, { useEffect, useRef, useState } from "react";
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
    ActionButton,
    MenuButton,
    LogoutGroup
} from "./Layout.Styled";
import { FaSignOutAlt } from 'react-icons/fa';

const Layout = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleLogout = () => {
        navigate("/login");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);


    return (
        <Container>
            <Header>
                <Title>Product Explorer</Title>
                <MenuButton ref={buttonRef} onClick={() => setOpen(!open)}>
                    <span />
                    <span />
                    <span />
                </MenuButton>
                <Nav ref={menuRef} open={open}>
                    <OrderList>
                        <List><Link to="/">Home</Link></List>
                        <List><Link to="/products">Products</Link></List>
                        <List><Link to="/cart">Cart</Link></List>
                        <List><Link to="/about">About</Link></List>
                        <List>
                            <ActionButton onClick={handleLogout}>
                                <LogoutGroup>{FaSignOutAlt({ size: 18 })}Logout</LogoutGroup>
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
