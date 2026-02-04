import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Card = styled.div`
  max-width: 800px;
  padding: 3rem;
  border-radius: 16px;
  background-color: ${({ theme }) =>
        theme.background === "#333" ? "#444" : "#fff"};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.85;
  line-height: 1.6;
`;
