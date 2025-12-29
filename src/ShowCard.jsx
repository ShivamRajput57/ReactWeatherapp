import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import React from "react";
import "./ShowCard.css";
export default function WheatherCard({weatherData}) {
    let baseImageUrl = "https://images.unsplash.com/photo-1626440237106-0c5385c5a4fd?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={baseImageUrl}    
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherData.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {weatherData.description}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            {weatherData.temperature}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Max: {weatherData.temperatureMax}°C | Min: {weatherData.temperatureMin}°C
                        </Typography>

                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
