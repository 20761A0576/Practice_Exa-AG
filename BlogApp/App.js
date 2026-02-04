import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import PostList from "./Pages/PostList/PostList"
import NotFoundPage from "./Pages/NotFound/NotFound";
import { Header, Navbtn, Title, Nav } from "./App.Style";
import PostComment from "./Pages/SinglePost/CommentPage/CommentPage";
import PostAuthor from "./Pages/SinglePost/AuthorPage/AuthorPage";
import SinglePost from "./Pages/SinglePost/SinglePost";


function App() {
    return (
        <BrowserRouter>
            <Header>
                <Title>Blogs</Title>
                <Nav >
                    <Link to="/" style={{ textDecoration: "none" }}><Navbtn>Home</Navbtn></Link>
                    <Link to="/post" style={{ textDecoration: "none" }}><Navbtn>Post</Navbtn></Link>
                    <Link to="/about" style={{ textDecoration: "none" }}><Navbtn>About</Navbtn></Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}><Navbtn>Contact</Navbtn></Link>
                </Nav>
            </Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/post" element={<PostList />} />
                <Route path="/posts/:id" element={<SinglePost />}>
                    <Route path="author" element={<PostAuthor />} />
                    <Route path="comments" element={<PostComment />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
