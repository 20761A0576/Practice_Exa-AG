import React from "react";
import {
    HomeContainer,
    HeroSection,
    Title,
    Subtitle,
    CardGrid,
    Card,
    CardTitle,
    CardText,
} from "./Home.Styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <HomeContainer>
            <HeroSection>
                <Title>Welcome to Product Explorer 🚀</Title>
                <Subtitle>
                    Discover products, manage your cart, and explore amazing deals.
                </Subtitle>
            </HeroSection>

            <CardGrid>
                <Card onClick={() => navigate("/products")}>
                    <CardTitle>🛍 Products</CardTitle>
                    <CardText>
                        Browse a wide range of high-quality products curated just for you.
                    </CardText>
                </Card>

                <Card onClick={() => navigate("/favorites")}>
                    <CardTitle>❤️ Favorites</CardTitle>
                    <CardText>
                        Save your favorite products and access them anytime.
                    </CardText>
                </Card>

                <Card onClick={() => navigate("/cart")}>
                    <CardTitle>🛒 Cart</CardTitle>
                    <CardText>
                        Easily manage items in your cart and checkout seamlessly.
                    </CardText>
                </Card>
            </CardGrid>
        </HomeContainer>
    );
};

export default Home;
