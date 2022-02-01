import React from "react";

import SvgSelect from "./SvgSelect";

import "../styles/currentWeatherInfoItem.scss";


const CurrentWeatherInfoItem = ({generalDataWeather}) => {
    return (
        <>
            <div className="weather-info__item">
                <div className="weather-info__icon">
                    <SvgSelect name={generalDataWeather.icon} />
                </div>
                <div className="weather-info__data">
                    <span>{generalDataWeather.describe}</span>

                    <div className="weather-info__subdata">
                        {generalDataWeather.option}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentWeatherInfoItem;