import React, { useCallback, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import posts from "../../Data/Posts";
import { Container, PostListTag, Header, Title, SearchTag } from "./PostList.Styled";
import PostCard from "../PostCard/PostCard";

function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredPosts = useMemo(()=>{
    const filterData = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filterData;
  },[searchQuery]);

  const handleSearch = useCallback((e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  },[searchParams]);

  return (
    <Container>
      <Header>
        <Title>Posts</Title>
        <SearchTag
          type="search"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </Header>
      <PostListTag>
        {filteredPosts.map((post) => (
          <Link key={post.id} state={{ post }} to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
            <PostCard key={post.id} title={post.title} content={post.content} author={post.author} category={post.category} createdAt={post.createdAt} tags={post.tags}></PostCard>
          </Link>
        ))}
      </PostListTag>
    </Container>
  );
}

export default PostList;
