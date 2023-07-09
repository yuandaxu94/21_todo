import TodoData from "./component/TodoData";

import './index.css'

const TodoList = (props) => {
    const {todoData, setTodoData} = props;

    return (
        <table className='todo-list-container'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Is Completed</th>
                <th>Operations</th>
            </tr>
            </thead>
            <tbody>
            {todoData.map(todo => {
                return (
                    <TodoData
                        key={todo.id}
                        todo={todo}
                        todoData={todoData}
                        setTodoData={setTodoData}
                    />
                )
            })}
            </tbody>
        </table>
    )
}

export default TodoList;