import React, { useCallback, useMemo, useState } from "react";
import {
    Container,
    WeatherContainer,
    Header,
    SearchWrapper,
    SearchInput,
    SuggestionsList,
    SuggestionItem,
    WeatherCard,
    WeatherRow,
    WeatherValue
} from "./Weather.Styled";
import weather from "../Data/Weather";
type WeatherCondition = "Sunny" | "Cloudy" | "Rainy";

const Weather = () => {

    const [query, setQuery] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length <= 0) {
            setIsOpen(false);
            return;
        }
        fetchSuggestions(value);
    },[query]);

    const fetchSuggestions = useCallback((query: string) => {
        const data: string[] = weather
            .filter((item) => item.city.trim().toLowerCase().includes(query.trim().toLowerCase()))
            .map((item) => item.city);
        setSuggestions(data);
        setIsOpen(true);
    },[query]);

    const weatherData = useMemo(() => {
        const data = weather.find((item) => item.city.trim().toLowerCase() === query.trim().toLowerCase());
        return data;
    }, [query]);

    return (
        <Container>
            <WeatherContainer>
                <Header>Weather App</Header>
                <SearchWrapper>
                    <SearchInput
                        type="search"
                        value={query}
                        placeholder="Search city..."
                        onChange={handleChange}
                        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
                    />

                    {isOpen && suggestions.length > 0 && (
                        <SuggestionsList>
                            {suggestions.map((city, index) => (
                                <SuggestionItem
                                    key={index}
                                    onClick={() => {
                                        setQuery(city);
                                        setIsOpen(false);
                                    }}
                                >
                                    {city}
                                </SuggestionItem>
                            ))}
                        </SuggestionsList>
                    )}
                </SearchWrapper>
                {
                    (weatherData) && (
                        <div>
                            <WeatherCard condition={weatherData?.condition as WeatherCondition}>
                                <WeatherRow>
                                    <span>Condition</span>
                                    <WeatherValue>{weatherData?.condition}</WeatherValue>
                                </WeatherRow>

                                <WeatherRow>
                                    <span>Humidity</span>
                                    <WeatherValue>{weatherData?.humidity}%</WeatherValue>
                                </WeatherRow>

                                <WeatherRow>
                                    <span>Temperature</span>
                                    <WeatherValue>{weatherData?.temperature}°C</WeatherValue>
                                </WeatherRow>

                                <WeatherRow>
                                    <span>Wind Speed</span>
                                    <WeatherValue>{weatherData?.windSpeed} km/h</WeatherValue>
                                </WeatherRow>
                            </WeatherCard>
                        </div>
                    )
                }

            </WeatherContainer>
        </Container>
    )
}

export default Weather;