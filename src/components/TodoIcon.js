import React from "react";
/* Iconos */
import {ReactComponent as CheckIcon} from "./checked.svg";
import {ReactComponent as DeleteIcon} from "./delete.svg";
import "../styles/TodoIcon.css"

/* SVG permite agegarle propiedades como si fuera un componente */
const iconTypes = {
    "check": color => (
        <CheckIcon className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <DeleteIcon className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({type, color = 'gray', onClick}) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};