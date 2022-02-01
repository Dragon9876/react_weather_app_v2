import React, {useState} from "react";

import "../styles/weatherForecastDaily.scss";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {TailSpin} from 'react-loader-spinner';
import SvgSelect from "./SvgSelect";



const WeatherForecastDaily = ({infoDailyForecastGeneral,
                                  getCurrentTime,
                                  selectCardinal,
                                  roundInfo,
                                  getDayByWord,
                                  weatherInfo
                              }) => {

    const [selected, setSelected] = useState(null);

    const toggle = (index) => {

        if(selected === index){
            return setSelected(null);
        }

        setSelected(index);

    }

    return (
        <>
            <div className="forecast-daily__inner forecast">
                <div className="forecast-daily__title">
                    <div>Прогноз погоди на 8 днів
                        <span>{` - ${weatherInfo.nameCity ? weatherInfo.nameCity : "Loading..."}`}</span>
                    </div>
                    <span>Станом на {getCurrentTime()}</span>
                </div>
                <div className="forecast-daily__details">
                    {
                        infoDailyForecastGeneral.daily ? infoDailyForecastGeneral.daily.map((dailyItem, index) =>
                            <div className="forecast-daily__item forecast__item">
                                <div className="forecast-daily__item-inner forecast__item-inner"
                                     onClick={() => toggle(index)}
                                >
                                    <div className="forecast-daily__item-time forecast__item-time">{`${getDayByWord(dailyItem.dt)}`}</div>
                                    <div className="forecast-daily__item-temp forecast__item-temp">{`${roundInfo(dailyItem.temp.day)}°`}</div>
                                    <div className="forecast-daily__item-desc forecast__item-desc">
                                        <img src={`http://openweathermap.org/img/wn/${dailyItem.weather[0].icon}.png`} alt=""/>
                                        <div>{dailyItem.weather[0].description}</div>
                                    </div>
                                    <div className="forecast-daily__item-wind forecast__item-wind">
                                        <div>{selectCardinal(dailyItem.wind_deg)}</div>
                                        {`${roundInfo(dailyItem.wind_speed)} км/год`}
                                    </div>
                                    <div className={selected === index ? "forecast-hourly__item-icon forecast__item-icon active" : "forecast-hourly__item-icon forecast__item-icon"}>
                                        <SvgSelect name="arrow_accordion" />
                                    </div>
                                </div>

                                <div className="forecast-daily__item-accordion">
                                    <div className={selected === index ? "forecast-hourly__item-wrapper forecast__item-wrapper active" : "forecast-hourly__item-wrapper forecast__item-wrapper"}>
                                        <div className="forecast-hourly__item-block forecast__item-block">
                                            <div className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="temp" />
                                                </div>
                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Температура</span>
                                                    {`${roundInfo(dailyItem.temp.day)}°`}
                                                </div>
                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="wind" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Вітер</span>
                                                    {`${roundInfo(dailyItem.wind_speed)} км/год`}
                                                </div>

                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="cloud" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Хмарність</span>
                                                    {`${roundInfo(dailyItem.clouds)}%`}
                                                </div>

                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main ">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="drop" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Вологість</span>
                                                    {`${roundInfo(dailyItem.humidity)}%`}
                                                </div>
                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="compress" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Тиск</span>
                                                    {`${roundInfo(dailyItem.pressure)} мбар`}
                                                </div>
                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="eye" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Видимість</span>
                                                    {`${roundInfo(dailyItem.visibility)} м`}
                                                </div>
                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="dev_point" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Точка роси</span>
                                                    {`${roundInfo(dailyItem.dew_point)}%`}
                                                </div>
                                            </div>

                                            <div  className="forecast-hourly__item-main forecast__item-main">
                                                <div className="forecast-hourly__item-bg forecast__item-bg">
                                                    <SvgSelect name="sun" />
                                                </div>

                                                <div className="forecast-hourly__item-text forecast__item-text">
                                                    <span>Уф-індекс</span>
                                                    {`${dailyItem.uvi} з 10`}
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

                <div className="forecast-daily__link forecast__link">
                    <a href="">Погода на 10 днів
                        <SvgSelect name="arrow_down"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default WeatherForecastDaily;