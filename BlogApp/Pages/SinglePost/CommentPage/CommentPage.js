import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../../Data/Posts";
import {
  Container,
  Card,
  Title,
  CommentList,
  CommentItem,
  CommentUser,
  CommentText,
  CommentDate,
  EmptyState,
} from "./CommentPage.Styled";

function CommentPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Container>
        <Card>
          <Title>Comments</Title>
          <EmptyState>Post not found.</EmptyState>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Title>Comments</Title>

        {post.comments.length > 0 ? (
          <CommentList>
            {post.comments.map((comment) => (
              <CommentItem key={comment.id}>
                <CommentUser>{comment.user}</CommentUser>
                <CommentText>{comment.comment}</CommentText>
                <CommentDate>{comment.date}</CommentDate>
              </CommentItem>
            ))}
          </CommentList>
        ) : (
          <EmptyState>No comments yet</EmptyState>
        )}
      </Card>
    </Container>
  );
}

export default CommentPage;
