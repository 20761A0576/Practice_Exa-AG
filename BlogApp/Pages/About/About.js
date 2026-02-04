import React from "react";
import { Container, Card, Title, Description } from "./About.Styled";

function About() {
    return (
        <Container>
            <Card>
                <Title>About Us</Title>
                <Description>
                    This application is built using React, Context API, Reducers,
                    Styled Components, and React Router. It demonstrates theme switching,
                    authentication simulation, and clean UI architecture.
                </Description>
            </Card>
        </Container>
    );
}

export default About;
