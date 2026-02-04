import styled from "styled-components";

export const Container = styled.div`

  padding: 4rem 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
`;
export const SubCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 8px;

  background: transparent;
  color: ${({ theme }) => theme.primary};
  font-size: 0.95rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryLight || "#eef4ff"};
    text-decoration: none;
  }
`;


export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary || "#555"};
  margin-bottom: 1.5rem;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;

  strong {
    margin-right: 4px;
  }
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.primaryLight || "#eef4ff"};
  color: ${({ theme }) => theme.primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
`;

export const Nav = styled.nav`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border || "#eee"};
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const NavItem = styled.div`
  padding: 0.5rem 1.3rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.primaryLight || "#f1f6ff"};
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #000000;
  }
`;
