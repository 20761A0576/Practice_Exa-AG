import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  border-radius: 16px;
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CommentItem = styled.div`
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.backgroundAlt || "#f7f9fc"};
`;

export const CommentUser = styled.p`
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.primary};
`;

export const CommentText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0.4rem;
`;

export const CommentDate = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary || "#888"};
`;

export const EmptyState = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary || "#777"};
  padding: 2rem 0;
`;
