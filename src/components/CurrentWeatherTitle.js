import React from "react";
import {useState} from "react";

import SvgSelect from "./SvgSelect";

import {Spring, config, animated} from "react-spring";

import "../styles/currentWeatherTitle.scss";



const CurrentWeatherTitle = () => {

    const [isActive, setIsActive] = useState(true);

   return (
        <>
           <div className="title-weather" >
               <div className="title-weather__text">
                   Weather
               </div>
               <div className="title-weather__buttons">
                   <button className={isActive ? "title-weather__button" : "title-weather__button-active"} onClick={() => setIsActive(!isActive)}>
                       Recent
                       <SvgSelect name="arrow_down" />
                   </button>
                   <button>
                       <SvgSelect name="dots" />
                   </button>
                       <Spring from={{opacity: 0, transform: "scale(0.8)"}}
                               to={{opacity: 1, transform: "scale(1)"}}
                               config={{duration: 150}}
                               reverse={isActive}
                       >
                           {styles => (
                               <animated.div className="title-weather__pop" style={styles}>
                                   <span>Mark as read</span>
                                   <span>Go setting</span>
                               </animated.div>
                           )}
                       </Spring>

               </div>
           </div>
        </>

   )
}

export default CurrentWeatherTitle;