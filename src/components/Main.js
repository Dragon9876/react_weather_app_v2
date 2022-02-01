import React from "react";

import CurrentWeather from './CurrentWeather';
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import CurrentWeatherTitle from "./CurrentWeatherTitle";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import WeatherForecastHourly from "./WeatherForecastHourly";
import WeatherForecastDaily from "./WeatherForecastDaily";

import ChartAuto from 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import {animated, Spring} from "react-spring";

import "../styles/main.scss";

const Main = (props) => {

    const getCurrentTime = () => {
        const monthNames = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня",
            "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"
        ];

        let today = new Date();

        return today.getDate().toString() + " " + monthNames[today.getMonth()]
    }

    const selectCardinal = (deg) => {
        const cardinal = {
            north: "Пн",
            north_north_east: "Пн-Пн-Сх",
            north_east: "Пн-Сх",
            east_north_east: "Сх-Пн-Сх",
            east: "Сх",
            east_south_east: "Сх-Пд-Сх",
            south_east: "Пд-Сх",
            south_south_east: "Пд-Пд-Сх",
            south: "Пд",
            south_south_west: "Пд-Пд-Зх",
            south_west: "Пд-Зх",
            west_south_west: "Зх-Пд-Зх",
            west: "Зх",
            west_north_west: "Зх-Пн-Зх",
            north_west: "Пн-Зх",
            north_north_west: "Пн-Пн-Зх"
        }

        if(deg > 348.75 || deg <= 11.25){
            return cardinal.north;
        }

        if(deg > 11.25 && deg <= 33.75 ){
            return cardinal.north_north_east;
        }

        if(deg > 33.75 && deg <= 56.25){
            return cardinal.north_east;
        }

        if(deg > 56.25 && deg <= 78.75){
            return cardinal.east_north_east;
        }

        if(deg > 78.75 && deg <= 101.25){
            return cardinal.east;
        }

        if(deg > 101.25 && deg <= 123.75){
            return cardinal.east_south_east;
        }

        if(deg > 123.75 && deg <= 146.25 ){
            return cardinal.south_east;
        }

        if(deg > 146.25 && deg <= 168.75  ){
            return cardinal.south_south_east;
        }

        if(deg > 168.75 && deg <= 191.25){
            return cardinal.south;
        }

        if(deg > 191.25 && deg <= 213.75 ){
            return cardinal.south_south_west;
        }

        if(deg > 213.75 && deg <= 236.25){
            return cardinal.south_west;
        }

        if(deg > 236.25 && deg <= 258.75){
            return cardinal.west_south_west;
        }

        if(deg > 258.75 && deg <= 281.25){
            return cardinal.west;
        }

        if(deg > 281.25 && deg <= 303.75){
            return cardinal.west_north_west;
        }

        if(deg > 303.75 && deg <= 326.25){
            return cardinal.north_west;
        }

        if(deg > 326.25 && deg <= 348.75){
            return cardinal.north_north_west;
        }

    }

    const roundInfo = (infoTemp) => {
        return Math.round(infoTemp).toString();
    }

    const getDayByWord = (dateString) => {
        const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let dt = new Date(dateString * 1000);

        return  days[dt.getDay()] + " " + dt.getDate();
    }


    return (
        <>
            <Spring from={{opacity: 0,
                     transform: "translateY(-20px)"}}
                    to={{opacity: 1, transform: "translateY(0px)"}}
                    config={{duration: 300}}
             >
                {styles => (
                    <animated.div className="wrapper" style={styles}>
                        <div className="title">
                            <CurrentWeatherTitle />
                        </div>

                        <div className="main">
                            <CurrentWeather info={props.info}/>
                            <CurrentWeatherInfo data={props.info}/>
                        </div>

                        <div className="details">
                            <CurrentWeatherDetails weatherInfo={props.info} weatherForecast={props.infoForecastHourly}/>
                        </div>

                        <div className="forecast-hourly">
                            <WeatherForecastHourly
                                infoHourlyForecastGeneral={props.infoForecastHourly}
                                getCurrentTime={getCurrentTime}
                                selectCardinal={selectCardinal}
                                roundInfo={roundInfo}
                            />
                        </div>

                        <div className="forecast-daily">
                            <WeatherForecastDaily
                                infoDailyForecastGeneral={props.infoForecastDaily}
                                getCurrentTime={getCurrentTime}
                                selectCardinal={selectCardinal}
                                roundInfo={roundInfo}
                                getDayByWord={getDayByWord}
                                weatherInfo={props.info}
                            />
                        </div>
                    </animated.div>
                )}
            </Spring>
        </>
    )
}

export default Main;