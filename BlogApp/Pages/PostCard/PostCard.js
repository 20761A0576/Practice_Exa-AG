import React from "react";
import { Card, Title, Content, Meta, Tags } from "./PostCard.Styled";

const PostCard = ({ title, content, author, category, createdAt, tags }) => {
  return (
    <Card>
      <Title>{title}</Title>

      <Content>{content}</Content>

      <Meta>
        <strong>Author:</strong> {author} |{" "}
        <strong>Category:</strong> {category} |{" "}
        <strong>Created At:</strong> {createdAt}
      </Meta>

      <Tags>
        <strong>Tags:</strong>{" "}
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>
    </Card>
  );
};

export default PostCard;
