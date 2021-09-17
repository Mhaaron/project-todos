/* Este archivo es StateFull ya que contiene funciones y valores para cambios de Estado */
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

function App() {

  return (
    /* Todos los componentes que esten dentro de AppUI podran llamar al Consumer */
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export {App};
