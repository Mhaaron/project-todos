import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css"

/* El modal puede recibir componentes para crear formularios etc. */
function Modal({children}) {
    /* El Portal renderiza el modal en el nodo modal traido desde HTML */
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {/* Envovemos al hijo para poder agregar la clase al div */}
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};