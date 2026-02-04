import React from "react";
import { Container, Card, Title, Subtitle } from "./Home.Styled";

function Home() {
    return (
        <Container>
            <Card>
                <Title>Welcome Home</Title>
                <Subtitle>
                    This is the home page of your React application. Explore theme
                    switching, routing, authentication simulation, and styled components.
                </Subtitle>
            </Card>
        </Container>
    );
}

export default Home;
