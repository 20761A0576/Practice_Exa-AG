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

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>Welcome to Product Explorer 🚀</Title>
        <Subtitle>
          Discover products, manage your cart, and explore amazing deals.
        </Subtitle>
      </HeroSection>

      <CardGrid>
        <Card>
          <CardTitle>🛍 Products</CardTitle>
          <CardText>
            Browse a wide range of high-quality products curated just for you.
          </CardText>
        </Card>

        <Card>
          <CardTitle>❤️ Favorites</CardTitle>
          <CardText>
            Save your favorite products and access them anytime.
          </CardText>
        </Card>

        <Card>
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
