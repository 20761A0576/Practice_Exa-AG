import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const PostListTag = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;
export const Title = styled.h2`
  padding: 0.2rem;
  font-size: 1.5rem;
`;
export const SearchTag = styled.input`
  width: 30rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
`;
