import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  SubCard,
  BackButton,
  Title,
  Content,
  MetaRow,
  Tag,
  Nav,
  NavItem,
} from "./SinglePost.Styled";
import { useParams } from "react-router-dom";
import posts from "../../Data/Posts";

const SinglePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  return (
    <Container>
      <Card>
        <SubCard>
          <Title>{post.title}</Title>
          <BackButton onClick={() => navigate("/post")}>← Back</BackButton>
        </SubCard>
        <Content>{post.content}</Content>

        <MetaRow>
          <span><strong>Author:</strong> {post.author}</span>
          <span><strong>Category:</strong> {post.category}</span>
          <span><strong>Created:</strong> {post.createdAt}</span>
        </MetaRow>

        <MetaRow>
          <strong>Tags:</strong>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </MetaRow>

        <Nav>
          <Link to="comments" style={{ textDecoration: "none" }}>
            <NavItem>Comments ({post.comments.length})</NavItem>
          </Link>
          <Link to="author" style={{ textDecoration: "none" }}>
            <NavItem>Author Info</NavItem>
          </Link>
        </Nav>

        <Outlet />
      </Card>
    </Container>
  );
};

export default SinglePost;
