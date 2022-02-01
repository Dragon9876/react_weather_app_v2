import React, {useState} from "react";

// import components
import SvgSelect from './SvgSelect';

// import styles
import '../styles/header.scss';


 const Header = ({getSelectedCity, getSelectedTemp}) => {
     const [selectedOptions, setSelectedOptions] = useState({
         selectedCity: ''
     });

     const setNewCity = (e) => {
         setSelectedOptions({
             selectedCity: e.target.value
         });
     }

     const selectCity = selectedOptions.selectedCity;

     return (
         <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__navbar">
                            <div className="header__logo">
                                <SvgSelect name="header-logo"/>
                            </div>
                        </div>

                        <div className="header__city">
                            <SvgSelect name="header-select"/>
                            <form action="">
                                <div className="header__input">
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        getSelectedCity(selectCity);
                                    }}>
                                        <SvgSelect name="search" />
                                    </button>
                                    <input
                                        type="text"
                                        onChange={setNewCity} placeholder="Search for weather..."/>
                                </div>
                            </form>
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    getSelectedTemp("metric")
                                }}
                                >C</button>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        getSelectedTemp("imperial");
                                    }}
                                >F</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
         </>
     )
 }

 export default Header;

