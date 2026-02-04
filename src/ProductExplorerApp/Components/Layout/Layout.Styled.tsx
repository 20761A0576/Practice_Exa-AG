import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f9fafb;
  color: #1f2937;
`;

export const Header = styled.header`
  background: #111827;
  color: #ffffff;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: fixed;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Nav = styled.nav<{ open: boolean }>`
  display: flex;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 4rem;
    right: 0;
    background:rgb(243, 244, 246);
    width: 10rem;
    padding: 1rem;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    width: 24px;
    height: 3px;
    background: #ffffff;
    border-radius: 2px;
  }
`;


export const OrderList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;


export const List = styled.li`
  a {
    text-decoration: none;
    color: #60a5fa;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #3b82f6;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background: #f9fafb;
  color: #1f2937;
`;

export const Footer = styled.footer`
  background: #111827;
  color: #9ca3af;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #60a5fa;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;
export const LogoutGroup = styled.div`
  display: flex;
  gap: 0.2rem;
  background: transparent;
  border: none;
  color:rgb(210, 34, 34);
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color:rgb(255, 4, 4);
  }
`;
