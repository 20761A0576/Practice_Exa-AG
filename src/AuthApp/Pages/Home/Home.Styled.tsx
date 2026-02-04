import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #6366f1, #3b82f6);
  color: #ffffff;
  padding: 4rem 2rem;
  border-radius: 12px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.95;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: #2563eb;
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.5;
`;
