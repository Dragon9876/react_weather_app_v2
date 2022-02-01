import React from "react";


import "../styles/currentWeatherDetails.scss";
import SvgSelect from "./SvgSelect";

import {Bar} from "react-chartjs-2";


const CurrentWeatherDetails = ({weatherInfo, weatherForecast}) => {
    const dataForecast = weatherForecast.hourly;

    let dtArray = [];
    let temps = [];

    if(dataForecast) {
            dataForecast.forEach(hourlyWeather => {
                let unix_timestamp = hourlyWeather.dt;
                let date = new Date(unix_timestamp * 1000);
                let hours = date.getHours();

                dtArray.push(hours);
            })
            temps = dataForecast.map(tempWeather => tempWeather.temp);
    }

    const data = {
        labels: dtArray,
        datasets: [
            {
                data: temps,
                label: `${weatherInfo.nameCity}`,
                backgroundColor: [
                    ],
                borderColor: [
                    '#6563FF'
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true
    }

    const roundInfo = (infoTemp) => {
        return Math.round(infoTemp).toString();
    }

    const detailsWeather = [
        {info: `${weatherInfo.temp_min ? roundInfo(weatherInfo.temp_min) : "..."}°/${weatherInfo.temp_max ? roundInfo(weatherInfo.temp_max) : "..."}°`, description: 'Низьк./вис.', icon: 'temp'},
        {info: `${weatherInfo.speedWind ? weatherInfo.speedWind  : "..."} км/год`, description: 'Вітер', icon: 'wind'},
        {info: `${weatherInfo.humidity ? weatherInfo.humidity : "..."}%`, description: 'Вологість', icon: 'drop'},
        {info: `${weatherInfo.dew_point ? roundInfo(weatherInfo.dew_point) : "..."}%`, description: 'Точка роси', icon: 'dev_point'},
        {info: `${weatherInfo.pressure ? weatherInfo.pressure : "..."} мбар`, description: 'Тиск', icon: 'compress'},
        {info: `${weatherInfo.clouds ? weatherInfo.clouds : "..."}%`, description: 'Хмарність', icon: 'cloud'},
        {info: `${weatherInfo.visibility ? weatherInfo.visibility : "..."} м`, description: 'Видимість', icon: 'eye'},
        {info: `${weatherInfo.timezone ? weatherInfo.timezone : "..."}`, description: 'Часовий пояс', icon: 'time'},
    ]

    return (
        <>
            <div className="weather-details">
                <div className="weather-details__title">
                    <div className="weather-details__city">
                        Погода - {weatherInfo.nameCity ? weatherInfo.nameCity : "Loading..."}
                    </div>
                    <div className="weather-details__temp">
                        {weatherInfo.feelLike ? roundInfo(weatherInfo.feelLike) : "Loading..."}
                        <sup>o</sup>
                    </div>
                    <span>Відчувається як</span>
                </div>
                <div className="weather-details__main">
                        {detailsWeather.map(detail =>
                            <div className="weather-details__main-item ">
                                <div className="weather-details__main-desc">
                                    <SvgSelect name={detail.icon}/>
                                    {detail.description}
                                </div>
                                <div className="weather-details__main-info">
                                    {detail.info}
                                </div>
                            </div>
                        )}
                </div>

                <div className="weather-details__bars">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </>
    )
}

export default CurrentWeatherDetails;