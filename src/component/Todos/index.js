import {useEffect, useState} from "react";

import TodoList from "./component/TodoList";
import InputTodos from "./component/InputTodos";
import {getTodosRequest} from "../../utils";
import './index.css'
import {useFetchTodos} from "../../hooks/useFetchTodos";

const GET_ALL_URL = `https://jsonplaceholder.typicode.com/todos`;
const Todos = () => {
    const [todoData, setTodoData] = useFetchTodos(GET_ALL_URL);

    if (todoData.length === 0) {
        return (
            <div>
                <h1>Load...</h1>
            </div>
        )
    }

    return (
        <div className='todo-app-container'>
            <h1>Todo List</h1>
            <InputTodos
                todoData={todoData}
                setTodoData={setTodoData}
            />
            <TodoList
                todoData={todoData}
                setTodoData={setTodoData}
            />
        </div>
    )
}

export default Todos;