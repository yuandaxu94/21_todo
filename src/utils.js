export const getTodosRequest = async (URL) => {
    let responseData;
    await fetch(URL)
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => b.id - a.id)
            responseData = data
        })
    return responseData;
}

export const createTodoRequest = async (URL, todo) => {
    let responseData;
    await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: todo,
            completed: false,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => responseData = data)
    return responseData;
}

export const updateTodoRequest = async (URL, todo) => {
    let responseData;
    await fetch(URL, {
        method: 'PUT',
        body: JSON.stringify({
            ...todo,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => responseData = data)
    return responseData;
}

export const deleteTodoRequest = async (URL, todoData, todo) => {
    let responseData;
    await fetch(URL, {
        method: 'DELETE',
    })
        .then(res => {
            if (res.status === 200) {
                responseData = todoData.filter(_todo => _todo.id !== todo.id)
            }
        })
    return responseData;
}


export const getNewList = (todoData, todo, data) => {
    return todoData.map(_todo => {
        if (_todo.id === todo.id) {
            return data;
        } else {
            return _todo
        }
    });
}