import React, {useState} from "react";
import {useEffect} from "react";

import button from "../styles/button.scss";

const Button = ({tabName}) => {
    return (
        <div className="accessories__cart">
            <button onClick={getActiveButton}>{tabName}</button>
        </div>
    )
}

export default Button;