import styled from "styled-components";

export const Card = styled.div`
  min-width: 40rem;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 1.5rem;
  color: #222;
`;

export const Content = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const Meta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 8px;

  strong {
    color: #333;
    margin-right: 4px;
  }
`;

export const Tags = styled.p`
  font-size: 0.9rem;
  color: #444;

  span {
    background: #f1f3f5;
    padding: 4px 10px;
    border-radius: 20px;
    margin-right: 6px;
    display: inline-block;
  }
`;
