import React from "react";

import "../styles/currentWeatherInfo.scss";

const CurrentWeatherInfo = ({data}) => {




    const getCurrentTime = () => {
        let today = new Date();

        return (today.getMonth()+1).toString()+'.'+today.getDate().toString();
    }


    const roundTemp = (infoTemp) => {
        return Math.round(infoTemp).toString();
    }

    return (
        <>
            <div className="weather-info">
                <div className="weather-info__inner">
                    <div className="weather-info__title">
                        <div className="weather-info__title-main">
                            <div className="weather-info__title-city">
                                Погода - {data.nameCity ? data.nameCity : "Loading..."}
                            </div>
                            <span>Станом на {getCurrentTime()} EET</span>
                        </div>
                        <div className="weather-info__title-icon">
                            {data.desc &&
                                <img src={`http://openweathermap.org/img/wn/${data.desc[0].icon}.png`} alt=""/>
                            }
                        </div>
                    </div>
                    <div className="weather-info__main">
                        <div>
                            <div className="weather-info__main-temp">
                                {data.temp ? roundTemp(data.temp) : "..."}
                                <sup>o</sup>
                            </div>
                            <div className="weather-info__main-desc">
                                {data.desc ?
                                    <div>{data.desc[0].description}</div>
                                    :
                                    "..."
                                }
                            </div>
                        </div>
                        <div className="weather-info__main-temps">
                            {data.temp_min ? roundTemp(data.temp_min) : "..."}
                            <sup>o</sup>
                            <span>/</span>
                            {data.temp_max ? roundTemp(data.temp_max) : "..."}
                            <sup>o</sup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentWeatherInfo;

