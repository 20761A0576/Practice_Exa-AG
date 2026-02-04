import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Message, BackButton } from "./NotFoundPage.Styled";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <Container>
            <Message>Page Not Found</Message>
            <BackButton onClick={handleClick}>← Back to Home</BackButton>
        </Container>
    );
};

export default NotFoundPage;
