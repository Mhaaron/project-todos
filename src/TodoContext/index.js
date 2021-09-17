import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/* Permite crear providers y consumers, TodoContext = {Provider, Consumer}*/
const TodoContext = React.createContext();

function TodoProvider(props) {
    /* Uso de nuestro Custom Hook, se puede aplicar para muchas otras cosas */
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    /* Busqueda de los valores en el array de Todo´s */
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        /* Busca si el texto se encuentra en alguna parte del texto de nuestros Todos */
        return todoText.includes(searchText);
        });
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });

        saveTodos(newTodos)
    };

    /* Recibe el identificador que estemos implementando */
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        /* Si cambiamos el valor directamente se generá un error por lo que se necesita un nuevo array */
        const newTodos = [...todos];

        /* Creado para desmarcar TODOS */
        if (newTodos[todoIndex].completed) {
            newTodos[todoIndex].completed = false;
        } else {
            newTodos[todoIndex].completed = true;
        }

        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return(
        /* Nota: ctrl + -> */
        /* Todas las props que se quieran compartir deben ir en value*/
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};

/* Envuelve toda la aplicación */
//<TodoContext.Provider></TodoContext.Provider>
/* Se usa en todos los casos que se requiera algun estado en cualquiera de nuestros componentes */
//<TodoContext.Consumer></TodoContext.Consumer>