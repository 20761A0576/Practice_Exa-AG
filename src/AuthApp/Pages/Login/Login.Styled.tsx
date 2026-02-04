import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

export const Header = styled.h2`
  text-align: center;
`;

export const FormContainer = styled.form`
  background: #ffffff;
  padding: 0rem 2.5rem;
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 650;
  color: #374151;
`;
export const ErrorMessage = styled.label`
  font-size: 0.9rem;
  font-weight: small;
  color:rgb(250, 8, 8);
`;
export const Message = styled.label`
  font-size: 1rem;
  font-weight: small;
  padding-bottom: 2rem;
  text-align: center;
`;

const sharedInputStyles = `
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.25);
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  ${sharedInputStyles}
`;

export const Select = styled.select`
  ${sharedInputStyles}
  cursor: pointer;
`;

export const Button = styled.input`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  background: #667eea;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #5a67d8;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #a5b4fc;
    cursor: not-allowed;
  }
`;

