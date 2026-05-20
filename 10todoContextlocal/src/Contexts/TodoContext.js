import React from "react";
import { useContext ,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo Msg",
            Comleted: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider