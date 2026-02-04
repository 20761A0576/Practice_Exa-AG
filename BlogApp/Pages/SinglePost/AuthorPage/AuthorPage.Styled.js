import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 14px;
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
`;

export const Label = styled.p`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textSecondary || "#888"};
  margin-bottom: 0.4rem;
`;

export const AuthorName = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;
