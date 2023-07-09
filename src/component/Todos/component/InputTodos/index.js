import {useState} from "react";
import {createTodoRequest} from "../../../../utils";
import './index.css'

const CREATE_TODO_URL = `https://jsonplaceholder.typicode.com/todos`
const InputTodos = (props) => {
    const {todoData, setTodoData} = props;
    const [newTodo, setNewTodo] = useState('')
    const handleNewTodoChange = (e) => {
        const newTodoContent = e.target.value;
        setNewTodo(newTodoContent)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createTodoRequest(CREATE_TODO_URL, newTodo);
        setNewTodo('')
        setTodoData([data, ...todoData])
    }

    return (
        <div className='todo-input-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => handleNewTodoChange(e)}
                    placeholder='Enter New Todo'
                    required
                />

                <input
                    type="submit"
                    value="Add"
                />
            </form>

        </div>
    )
}

export default InputTodos;