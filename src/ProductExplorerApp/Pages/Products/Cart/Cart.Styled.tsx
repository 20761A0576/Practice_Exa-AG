import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px;
`;

export const CartCard = styled.div`
  display: flex;
  // gap: 2rem;
  width: 40rem;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
`;

export const Image = styled.img`
  width: 60%;
  height: 10rem;
  border-radius: 8px;
  object-fit: contain;
  border-radius: 0.5rem;
  background: #f3f4f6;
  margin-right: 16px;
`;

export const Info = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 16px;
`;

export const Price = styled.p`
  margin: 4px 0 0;
  font-weight: 600;
`;

export const RemoveButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 14px;
  margin: 8px 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #d9363e;
  }
`;

export const Empty = styled.p`
  text-align: center;
  color: #999;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CartFooter = styled.div`
  margin-top: auto;
  padding: 16px 24px;
  margin: 5rem 5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
`;

export const Total = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const PlaceOrderButton = styled.button`
  background: #2ecc71;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #27ae60;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background: #fff;
  color: #000;
  border: 0.1rem 0.1rem rgb(13, 13, 13);
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s ease, transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;


