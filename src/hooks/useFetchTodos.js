import {useEffect, useState} from "react";

export const useFetchTodos = (URL) => {
    const [todoData, setTodoData] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => b.id - a.id)
                setTodoData(data)
            })
    }, [])
    return [
        todoData,
        setTodoData
    ]
}