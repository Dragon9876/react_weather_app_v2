import React, {useState} from "react";
import SvgSelect from "./SvgSelect";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {TailSpin} from 'react-loader-spinner';


import "../styles/weatherForecastHourly.scss";

const WeatherForecastHourly = ({infoHourlyForecastGeneral, getCurrentTime, selectCardinal, roundInfo}) => {
    const rowForecast = () => {
        if(infoHourlyForecastGeneral.hourly) {
            return infoHourlyForecastGeneral.hourly.filter((item, index) => index < 6);
        }
    }

    const rowInfoForecast = rowForecast();

    const dtHourly = (dtArray) => {
        let date = new Date(dtArray * 1000);
        return date.getHours();
    }

    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if(selected === index){
            return setSelected(null);
        }
        setSelected(index);
    }

    return (
        <>
            <div className="forecast-hourly__inner forecast">
                <div className="forecast-hourly__title">
                    <div>Погодинний прогноз - Сьогодні</div>
                    <span>{getCurrentTime()}</span>
                </div>
                <div className="forecast-hourly__details">
                    {infoHourlyForecastGeneral.hourly ? rowInfoForecast.map((hourlyWeatherGeneralItem, index) =>
                        <div className="forecast-hourly__item forecast__item">
                            <div className="forecast-hourly__item-inner forecast__item-inner"
                                        onClick={() => toggle(index)}
                            >
                                <div className="forecast-hourly__item-time forecast__item-time">{`${dtHourly(hourlyWeatherGeneralItem.dt)}:00`}</div>
                                <div className="forecast-hourly__item-temp forecast__item-temp">{`${roundInfo(hourlyWeatherGeneralItem.temp)}°`}</div>
                                <div className="forecast-hourly__item-desc forecast__item-desc">
                                    <img src={`http://openweathermap.org/img/wn/${hourlyWeatherGeneralItem.weather[0].icon}.png`} alt=""/>
                                    <div>{hourlyWeatherGeneralItem.weather[0].description}</div>
                                </div>

                                <div className="forecast-hourly__item-wind forecast__item-wind">
                                    <div>{selectCardinal(hourlyWeatherGeneralItem.wind_deg)}</div>
                                    {`${roundInfo(hourlyWeatherGeneralItem.wind_speed)} км/год`}
                                </div>
                                <div className={selected === index ? "forecast-hourly__item-icon forecast__item-icon active" : "forecast-hourly__item-icon forecast__item-icon"}>
                                    <SvgSelect name="arrow_accordion" />
                                </div>
                            </div>

                            <div className="forecast-hourly__item-accordion">
                                <div className={selected === index ? "forecast-hourly__item-wrapper forecast__item-wrapper active" : "forecast-hourly__item-wrapper forecast__item-wrapper"}>
                                    <div className="forecast-hourly__item-block forecast__item-block">
                                        <div className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="temp" />
                                            </div>
                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Температура</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.feels_like)}°`}
                                            </div>
                                        </div>
                                        <div  className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="wind" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Вітер</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.wind_speed)} км/год`}
                                            </div>

                                        </div>
                                        <div  className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="cloud" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Хмарність</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.clouds)}%`}
                                            </div>

                                        </div>
                                        <div  className="forecast-hourly__item-main forecast__item-main ">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="drop" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Вологість</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.humidity)}%`}
                                            </div>

                                        </div>
                                        <div  className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="compress" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Тиск</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.pressure)} мбар`}
                                            </div>
                                        </div>

                                        <div  className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="eye" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Видимість</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.visibility)} м`}
                                            </div>
                                        </div>

                                        <div  className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="dev_point" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Точка роси</span>
                                                {`${roundInfo(hourlyWeatherGeneralItem.dew_point)}%`}
                                            </div>
                                        </div>

                                        <div  className="forecast-hourly__item-main forecast__item-main">
                                            <div className="forecast-hourly__item-bg forecast__item-bg">
                                                <SvgSelect name="sun" />
                                            </div>

                                            <div className="forecast-hourly__item-text forecast__item-text">
                                                <span>Уф-індекс</span>
                                                {`${hourlyWeatherGeneralItem.uvi} з 10`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) :
                        <TailSpin color="#6563FF" height={40} width={40} />
                    }
                </div>
                
                <div className="forecast-hourly__link forecast__link">
                    <a href="">Погода на 48 год
                        <SvgSelect name="arrow_down"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default WeatherForecastHourly;
