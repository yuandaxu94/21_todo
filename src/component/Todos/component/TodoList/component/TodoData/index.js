import {useState} from "react";
import {deleteTodoRequest, getNewList, updateTodoRequest} from "../../../../../../utils";

const TOGGLE_COMPLETE_URL = `https://jsonplaceholder.typicode.com/todos/`;
const TodoData = (props) => {
    const {todo, todoData, setTodoData} = props;
    const [isChanging, setIsChanging] = useState(false);
    const [newContent, setNewContent] = useState(todo.title)

    const handleToggle = async (todo) => {
        const id = todo.id;
        const URL = `${TOGGLE_COMPLETE_URL}${id}`;
        const newTodo = {
            ...todo,
            completed: !todo.completed,
        }
        const data = await updateTodoRequest(URL, newTodo);
        const newList = getNewList(todoData, todo, data);
        setTodoData(newList)
    }

    const handleNewContent = async (todo) => {
        const id = todo.id;
        const URL = `${TOGGLE_COMPLETE_URL}${id}`;
        const newTodo = {
            ...todo,
            title: newContent,
        }
        const data = await updateTodoRequest(URL, newTodo);
        const newList = getNewList(todoData, todo, data);
        setTodoData(newList)
        setIsChanging(false)
    }

    const handleDelete = async (todo) => {
        const id = todo.id;
        const URL = `${TOGGLE_COMPLETE_URL}${id}`;
        const newList = await deleteTodoRequest(URL, todoData, todo)
        setTodoData(newList)
    }

    const handleNewContentChange = (e) => {
        const temp = e.target.value;
        setNewContent(temp)
    }

    return (
        <tr
            key={todo.id}
        >
            <td>
                {todo.id}
            </td>
            {isChanging ?
                <td><input type="text" value={newContent} onChange={e => handleNewContentChange(e)}/></td> :
                <td>{todo.title}</td>
            }

            <td>
                <input type="checkbox" onChange={() => handleToggle(todo)} checked={todo.completed}/>
                {todo.completed ? <span>Finished</span> : <span>Processing</span>}
            </td>
            <td>
                {isChanging ?
                    <>
                        <button onClick={() => handleNewContent(todo)}>Submit</button>
                        <button onClick={() => setIsChanging(false)}>Cancel</button>
                    </> :
                    <>
                        <button onClick={() => setIsChanging(true)}>Modify</button>
                        <button onClick={() => handleDelete(todo)}>Delete</button>
                    </>
                }

            </td>
        </tr>
    )
}

export default TodoData;