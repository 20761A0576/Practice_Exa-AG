import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Message = styled.p`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;
