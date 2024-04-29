
import { useTheme } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../../features/authSlice";
import axios from "axios";
import { useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";



export default function WeatherCard() {
    const [weatherData, setWeatherData] = useState(null)
    const [location, setLocation] = useState(null);
    console.log(weatherData);
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')
    const theme = useTheme()
    const dispatch = useDispatch()


    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    }

    const getWeatherCall = async () => {
        dispatch(fetchStart());

        try {
            window.navigator.geolocation.getCurrentPosition(savePositionToState)
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&q=potsdam&units=metric&appid=${import.meta.env.VITE_WEATHER_apiKey}`)
            setWeatherData(data)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherCall()
    }, [])
    if (!weatherData) {
        return null;
    }



    return (
        <Card sx={{
            height: 70,
            padding: ".5rem",
            backgroundColor: theme.palette.mode === "dark" ? "primary.main" : "whitesmoke",
            color: theme.palette.mode === "dark" ? "secondary.main" : "neutral.light"
        }}>

                <Box display="flex" gap={2} marginTop={"1rem"} >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" width="50px" />
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                        {weatherData.name}
                    </Typography>
                    <Typography variant="span">
                        {Math.round(weatherData.main.temp)} <sup>°C</sup>
                    </Typography>
                </Box>
        </Card>
    );
}
