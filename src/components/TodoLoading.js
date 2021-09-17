import React from "react";
import "../styles/TodoLoading.css"

function TodoLoading() {
    return (
        <li className="TodoItem">
            <span
                className="Icon Icon-check"
            >
                ▄
            </span>
            
            <p className="TodoItem-p">
                llll    llll    llll    lllll
            </p>
            
            <span
                className="Icon Icon-delete"
            >
                ▄
            </span>
        </li>
    );
}

export {TodoLoading};