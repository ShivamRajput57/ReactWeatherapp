import React from "react";
import DataGet from "./DataGet";
import ShowCard from "./ShowCard.jsx";
import { useState, useEffect } from "react";

export default function Wheather() {
    let [weatherData, setWeatherData] = useState({
        city: "",
        temperature: null,
        description: "",
        temperatureMax: null,
        temperatureMin: null,
    });

    function updateWeatherData(data) {
        setWeatherData(data);
    }

    
    useEffect(() => {
        async function fetchDelhiWeather() {
            const baseUrl =
                "https://api.openweathermap.org/data/2.5/weather?q=";
            const key = "f10d27c76067d3f5c605cd05e95a428e";

            try {
                const response = await fetch(
                    `${baseUrl}Delhi&appid=${key}&units=metric`
                );
                const data = await response.json();

                const weatherData = {
                    city: "Delhi",
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    temperatureMax: data.main.temp_max,
                    temperatureMin: data.main.temp_min,
                };

                updateWeatherData(weatherData);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        }

        fetchDelhiWeather();
    }, []); 

    return (
        <div>
            
            <DataGet updateWeatherData={updateWeatherData} />
            <ShowCard weatherData={weatherData} />
        </div>
    );
}
