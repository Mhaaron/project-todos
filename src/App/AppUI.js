/* Se centralizan todos los componentes en este archivo AppUI StateLess*/
import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "./Modal"
import { TodoForm } from "../components/TodoForm";
import { TodoEmpty } from "../components/TodoEmpty"
import { TodoError } from "../components/TodoError";
import { TodoLoading } from "../components/TodoLoading";

function AppUI() {
    /* Otra manera de usar Consumer, el objeto es el "value" que se definio en context */
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
        
            <TodoSearch />
            
            {/* Render Props Sintaxis de React */}
            <TodoList>
                {/* Si se recibe un error mostrara este mensaje */}
                {error && <TodoError />}
                {/* Si recibe un loading mostrara este mensaje */}
                {(loading && !error) && <TodoLoading />}
                {/* Si no se recibe ninguno de los dos y no hay eelementos mostrara este mensaje */}
                {/* Los && se implementan como lógica, el segundo funciona como un "entonces" */}
                {(!loading && !searchedTodos.length) && <TodoEmpty />}

                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};