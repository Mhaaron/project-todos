import React from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoSearch.css"


function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="TodoSearchContainer">
            <input
                className="TodoSearch"
                placeholder="Buscar..."
                /* Conectamos el valor de la bsuqueda a nuestro input */
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export {TodoSearch};