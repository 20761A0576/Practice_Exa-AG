import styled from "styled-components";

type WeatherCondition = "Sunny" | "Cloudy" | "Rainy";

interface WeatherCardProps {
    condition?: WeatherCondition;
}

const getGradient = (condition?: WeatherCondition) => {
    switch (condition) {
        case "Sunny":
            return `linear-gradient(
          135deg,
          rgba(251, 191, 36, 0.95),
          rgba(245, 158, 11, 0.95)
        )`;

        case "Cloudy":
            return `linear-gradient(
          135deg,
          rgba(156, 163, 175, 0.95),
          rgba(107, 114, 128, 0.95)
        )`;

        case "Rainy":
            return `linear-gradient(
          135deg,
          rgba(59, 130, 246, 0.9),
          rgba(37, 99, 235, 0.9)
        )`;

        default:
            return `linear-gradient(
          135deg,
          rgba(190, 242, 242, 0.9),
          rgba(143, 245, 249, 0.9)
        )`;
    }
};

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;
export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color:rgb(224, 220, 220);
    padding: 1rem;
    height: 50vh;
    width: 50vh;
    border-radius: 0.3rem;
`;

export const Header = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #1e3a8a;
    background: linear-gradient(180deg,rgba(107, 114, 128, 0.95),rgba(37, 99, 235, 0.9),rgba(245, 158, 11, 0.95));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    margin: 20px 0;
    letter-spacing: 1px;
    transition: all 0.3s ease;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 25rem;
    margin: 1rem auto;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.6rem 1rem;
    font-size: 16px;
    border-radius: 0.3rem;
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease;

    &::placeholder {
        color: #9ca3af;
    }

    &:focus {
        transform: translateY(-1px);
        box-shadow: 0 12px 26px rgba(59, 130, 246, 0.25);
    }
`;
export const SuggestionsList = styled.ul`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0rem 0rem;
    list-style: none;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 0.3rem;
    max-height: 11rem;
    overflow-y: auto;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #c7c7c7;
        border-radius: 3px;
    }
`;

export const SuggestionItem = styled.li`
    padding: 0.3rem 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    color: #111827;
    transition: background 0.2s ease, transform 0.15s ease;
    border-bottom: 1px solid rgb(193, 190, 190);

    &:hover {
        background: linear-gradient(135deg, #60a5fa, #3b82f6);
        color: #ffffff;
        transform: scale(1.00);
        border-radius: 0.3rem;
    }
`;

export const WeatherCard = styled.div<WeatherCardProps>`
    margin-top: 24px;
    padding: 20px 24px;
    border-radius: 18px;
    background: ${({ condition }) => getGradient(condition)};
    color: #ffffff;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
    max-width: 420px;
`;

export const WeatherRow = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    font-size: 16px;
    letter-spacing: 0.3px;

    span {
        font-weight: 600;
        opacity: 0.95;
    }
`;

export const WeatherValue = styled.span`
    font-weight: 700;
    font-size: 17px;
`;

