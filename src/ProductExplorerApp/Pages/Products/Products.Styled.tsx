import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const SubCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: first baseline;
`;

export const SubBlock = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ClearBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
    width: 7rem;
    min-width: 4rem;
    margin: 0 4px;
    padding: 8px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    color: #fff;
    background-color:rgb(51, 204, 89);
`;

export const FilterButton = styled.button`
    padding: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color:rgb(155, 154, 154);
    background-color: transparent;
`;

export const ClearButton = styled.button`
    padding: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color:rgb(155, 154, 154);
    background-color: transparent;

    &:hover{
      text-decoration: underline;
      color:rgb(251, 4, 4);
    }
`;

export const ApplyButton = styled.button`
    margin: 1rem 0 0 0;
    width: 100%;
    border-radius: 0.3rem;
    padding: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #fff;
    background-color: #1976d2;
`;

export const FilterMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 8rem;
  right: 0;
  width: 15rem;
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 100;
  @media (max-width: 580px) {
    top: 10rem;
  }
`;

export const CategoryLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
    border: none;
    background-color: #fff;
`;

export const SearchInput = styled.input`
    width: 15rem;
    min-width: 10rem;
    padding: 0.6rem 1rem;
    font-size: 16px;
    border-radius: 0.3rem;
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.85);
    // backdrop-filter: blur(10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease;

    &::placeholder {
        color: #9ca3af;
    }

    &:focus {
        // transform: translateY(-1px);
        box-shadow: 0 12px 26px rgba(59, 130, 246, 0.25);
    }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 2rem;
  overflow: hidden;
  padding: 0.5rem;
  // box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  // transition: transform 0.2s ease, box-shadow 0.2s ease;

  // &:hover {
  //   transform: translateY(-4px);
  //   box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  // }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 0.5rem;
  background: #f3f4f6;
`;

export const CardBody = styled.div`
  // padding: 0.5rem;
  background-color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const SubTitle = styled.h3`
  margin: 0.8rem 0rem;
  font-size: 15px;
  color:rgb(153, 154, 155);
`;

export const Category = styled.p`
  margin: 4px 0;
  font-size: 13px;
  color: #777;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2e7d32;
  margin: 8px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 8px 0;
  line-height: 1.4;
`;

export const Stock = styled.span<{ $low?: boolean }>`
  display: inline-block;
  margin-top: 6px;
  font-size: 13px;
  color: ${({ $low }) => ($low ? "#d32f2f" : "#2e7d32")};
  font-weight: 600;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ActionButton = styled.button<{ $variant?: "edit" | "delete" }>`
  flex: 1;
  margin: 0 4px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  background-color: ${({ $variant }) =>
    $variant === "delete" ? "#f44336" : "#1976d2"};

  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
