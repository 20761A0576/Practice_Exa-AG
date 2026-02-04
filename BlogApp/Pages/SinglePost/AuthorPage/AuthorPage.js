import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../../Data/Posts";
import {
  Container,
  Card,
  Title,
  AuthorName,
  Label,
} from "./AuthorPage.Styled";

function AuthorPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Container>
        <Card>
          <Title>Author</Title>
          <p>Author information not found.</p>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Title>Author</Title>
        <Label>Written by</Label>
        <AuthorName>{post.author}</AuthorName>
      </Card>
    </Container>
  );
}

export default AuthorPage;
