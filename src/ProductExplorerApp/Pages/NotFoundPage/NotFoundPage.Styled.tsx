import styled from "styled-components";

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
  color: #111827;
  text-align: center;
  padding: 2rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const BackButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
`;
