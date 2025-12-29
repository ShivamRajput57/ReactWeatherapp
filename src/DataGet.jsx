import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import React from "react";
import "./DataGet.css";
export default function Wheather( {updateWeatherData}) {
    let [city, setCity] = React.useState("");
    let baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

    let Key ="f10d27c76067d3f5c605cd05e95a428e";

    async function getWheater(city) {
        let response = await fetch(`${baseUrl}${city}&limit=5&appid=${Key}&units=metric`);
        let data = await response.json();
        console.log(data);
        return data;
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    async function  formSubmit(event) {
        event.preventDefault();
        console.log("form submitted");
        console.log(city);
        let data = await getWheater(city);
        let weatherData = {
            city: city,
            temperature: data.main.temp,
            description: data.weather[0].description,
            temperatureMax: data.main.temp_max,
            temperatureMin: data.main.temp_min,
        };
        updateWeatherData(weatherData);
    }


    return (
        <div>
            <h1 className="mainTitle">Wheather App</h1>
           

            <form  onSubmit={formSubmit}>
                <div className="searchBar">
                    <TextField
                id="outlined-basic"
                label="ENTER CITY NAME"
                variant="outlined"
                sx={{
                    input: { color: "pink" }, // text color
                    label: { color: "pink" }, // label color
                }}
                value={city}
                onChange={handleChange}
                required
                ></TextField>
                <Button type="submit" variant="contained" endIcon={<SendIcon />} >Send</Button>
                
        
            

                </div>
                
            </form>

            
            
            
        </div>
    );
}
