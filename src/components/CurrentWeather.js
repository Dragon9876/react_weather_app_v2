import React from "react";

import SvgSelect from "./SvgSelect";

import '../styles/currentWeather.scss'

const CurrentWeather = ({info}) => {


    const getCurrentTime = () => {
        let today = new Date();

        return today.getHours().toString() + ":" + today.getMinutes().toString() + ":" + today.getSeconds().toString();
    }

    const roundTemp = (infoTemp) => {
        return Math.round(infoTemp).toString();
    }

    return (
        <>
            <div className="current-weather">
                <div className="current-weather__inner">
                    <div className="current-weather__main">
                        <div className="current-weather__info">
                            <div className="current-weather__temp">
                                {info.temp ? roundTemp(info.temp) : "Loading..."}
                                <sup>o</sup>
                            </div>

                            <span>Сьогодні</span>
                        </div>
                    </div>
                    <div className="current-weather__time">
                        <div className="current-weather__title">
                            <SvgSelect name="calender" />
                            Час:
                        </div>
                        <div className="current-weather__calender">
                            {getCurrentTime()}
                        </div>
                    </div>
                    <div className="current-weather__city">
                        <div className="current-weather__title">
                            <SvgSelect name="location" />
                            Місто:
                        </div>
                        <div className="current-weather__location">
                            {info.nameCity ? info.nameCity : "Loading..."}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CurrentWeather;