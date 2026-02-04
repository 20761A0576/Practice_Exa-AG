interface WeatherType {
    city: string,
    temperature: number,
    humidity: number,
    condition: string,
    windSpeed: number,
}
const weather: WeatherType[] = [
    { city: "London", temperature: 18, humidity: 65, condition: "Cloudy", windSpeed: 12 },
    { city: "New York", temperature: 25, humidity: 55, condition: "Sunny", windSpeed: 10 },
    { city: "Mumbai", temperature: 30, humidity: 75, condition: "Rainy", windSpeed: 15 },
    { city: "Delhi", temperature: 35, humidity: 40, condition: "Sunny", windSpeed: 8 },
    { city: "Tokyo", temperature: 22, humidity: 60, condition: "Cloudy", windSpeed: 11 },
    { city: "Paris", temperature: 20, humidity: 70, condition: "Cloudy", windSpeed: 9 },
    { city: "Sydney", temperature: 28, humidity: 50, condition: "Sunny", windSpeed: 13 },
    { city: "Moscow", temperature: 15, humidity: 80, condition: "Cloudy", windSpeed: 14 },
    { city: "Rio de Janeiro", temperature: 32, humidity: 65, condition: "Sunny", windSpeed: 12 },
    { city: "Beijing", temperature: 27, humidity: 55, condition: "Cloudy", windSpeed: 10 },
    { city: "Los Angeles", temperature: 26, humidity: 45, condition: "Sunny", windSpeed: 7 },
    { city: "Cairo", temperature: 33, humidity: 35, condition: "Sunny", windSpeed: 9 },
    { city: "Singapore", temperature: 31, humidity: 85, condition: "Rainy", windSpeed: 15 },
    { city: "Berlin", temperature: 19, humidity: 60, condition: "Cloudy", windSpeed: 11 },
    { city: "Dubai", temperature: 38, humidity: 30, condition: "Sunny", windSpeed: 12 }
];


export default weather;