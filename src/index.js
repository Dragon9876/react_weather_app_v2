import React from "react";
import reactDom from 'react-dom';
import {useState, useEffect} from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import './styles/app.scss';

const API_KEY = 'fe84c9801e8ae3edffb7207c2336103a';

const App = () => {
    const [infoWeather, setInfoWeather] = useState({
        nameCity: undefined,
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        pressure: undefined,
        feelLike: undefined,
        speedWind: undefined,
        desc: undefined,
        humidity: undefined,
        visibility: undefined,
        dew_point: undefined,
        dt: undefined
    });

    const [infoHourlyForecast, setInfoHourlyForecast] = useState({
        hourly: undefined
    });


    const [infoDailyForecast, setInfoDailyForecast] = useState({
        daily: undefined
    })

    const [selectedCity, setSelectedCity] = useState("ivano-frankivsk");

    const [selectTemp, setSelectTemp] = useState("metric");

    const getSelectedCity = (selectCity) => {
        setSelectedCity(selectCity);
    }

    const getSelectedTemp = (selectTemp) => {
        setSelectTemp(selectTemp);
    }

    useEffect(async () => {
        const api_url_1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=${selectTemp}&lang=ua&appid=${API_KEY}`);
        const weather_data = await api_url_1.json();

        const api_url_2 =  await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather_data.coord.lat}&lon=${weather_data.coord.lon}&units=${selectTemp}&lang=ua&appid=${API_KEY}`);
        const weather_data_forecast = await api_url_2.json();

         if(weather_data.cod === 200) {
             setInfoWeather({
                 nameCity: weather_data.name,
                 temp: weather_data.main.temp,
                 temp_max: weather_data.main.temp_max,
                 temp_min: weather_data.main.temp_min,
                 pressure: weather_data.main.pressure,
                 feelLike: weather_data.main.feels_like,
                 speedWind: weather_data.wind.speed,
                 desc: weather_data.weather,
                 humidity: weather_data.main.humidity,
                 visibility: weather_data.visibility,
                 dew_point: weather_data_forecast.current.dew_point,
                 dt: weather_data_forecast.current.dt,
                 clouds: weather_data_forecast.current.clouds,
                 timezone: weather_data.timezone
             })
         } else if (weather_data.cod === '404') {
             setInfoWeather({
                 cod: weather_data.cod,
                 message: weather_data.message
             })
         }

         setInfoHourlyForecast({
             hourly: weather_data_forecast.hourly
         });

         setInfoDailyForecast({
             daily: weather_data_forecast.daily
         })
    }, [selectedCity, selectTemp])

    return (
        <>
            <div className="page">
                    <div className="page__inner">
                        <Header
                            getSelectedCity={getSelectedCity}
                            getSelectedTemp={getSelectedTemp}
                        />
                        <div className="container">
                            <Main info={infoWeather} infoForecastHourly={infoHourlyForecast} infoForecastDaily={infoDailyForecast} />
                        </div>
                    </div>
            </div>
        </>
    )
}

/*
<Main info={info} infoForecastHourly={infoForecastHourly} infoForecastDaily={infoForecastDaily}
{infoWeather.cod !== '404' ?
                            <Main info={infoWeather} infoForecastHourly={infoHourlyForecast} infoForecastDaily={infoDailyForecast} />
                            :
                            <div>Warning!</div>
                            }

 */


reactDom.render(<App />, document.getElementById('root'));

