import styled from "styled-components";

export const Page = styled.div`
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.15);
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1976d2;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #125ea8;
  }
`;

export const BackButton = styled.button`
  padding: 8px 14px;
  background-color: #757575;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #616161;
  }
`;

