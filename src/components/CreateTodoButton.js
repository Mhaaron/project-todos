import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButton(props) {
    const onClickButton = () => {
        /* El estado tambien puede recibir funcion, esta retorna el estado anterior */
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button className="CreateTodoButton"
        /* Para poder enviar parámetros por la función debemos envolver la función en otra función */
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};