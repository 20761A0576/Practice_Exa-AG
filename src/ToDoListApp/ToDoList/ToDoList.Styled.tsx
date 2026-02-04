import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroupCheckBox = styled.div`
  display: flex;
  gap: 8rem;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 4px #0070f3;
  }
`;

export const CheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin-left: 8px;

  accent-color: #4f46e5; 

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.4);
  }
`;

export const SubmitButton = styled.input`
  padding: 10px 15px;
  background-color: #0070f3;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005bb5;
  }
`;

export const Table = styled.table`
  width: 90%;
  margin: 30px auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  background-color: #0070f3;
  border: 1px solid #ddd;
  color: white;
  padding: 12px 15px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px 15px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f3f3;
  }
  &:hover {
    background-color: #e0f0ff;
    transition: background-color 0.2s;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Delete = styled.button`
  padding: 0.5rem 1rem;
  background-color:#f60909;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
`;
export const Edit = styled.button`
  padding: 0.5rem 1rem;
  background-color:#06f33d;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
`;

export const NoData = styled.p`
  margin: 2rem;
  padding: 2rem;
  background-color:rgb(201, 198, 198);
  border: none;
  border-radius: 0.3rem;
  text-align: center;
`;
