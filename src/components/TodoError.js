import React from "react";
import "../styles/TodoError.css"

function TodoError() {
    return (
        <div className="TodoErrorContainer">
            <p className="TodoErrorText TodoErrorText-emoji">x_x</p>
            <p className="TodoErrorText TodoErrorText-error">Error inesperado</p>
            <p className="TodoErrorText TodoErrorText-msg">Pruebe reiniciando la página</p>
        </div>
    );
};

export {TodoError};