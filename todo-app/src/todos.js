import uuidv4  from 'uuid/v4'

let todo = []

// loadTodos

const loadTodos = () => {
    const todoJSON = localStorage.getItem('todo')
    
    try {
        todo = todoJSON ? JSON.parse(todoJSON) : []
    }catch (e){
        todos = []
    }
}

// saveTodos
// Arguments: none
// Return value: none

const saveTodos = () => {
    localStorage.setItem('todo',JSON.stringify(todo));
}


// getTodos
// Arguments: none
// Return value: todos array

const getTodos = () => todo

// createTodo
// Arguments: todo text
// Return value: none

const createTodo = (text) => {
    todo.push({
        id: uuidv4(),
        text,
        isCompleted: false
    })
    saveTodos()
}



const removeTodo = (id) => {
    const todoIndex = todo.findIndex((item) => item.id === id)
    if(todoIndex > -1) {
        todo.splice(todoIndex, 1)
        saveTodos()
    }
}



const toggleTodo = (id) => {
    const note = todo.find((item) => item.id === id)
    if (note){
        note.isCompleted = !note.isCompleted
        saveTodos()
    }
}

// Make sure to call loadTodos and setup the exports

loadTodos()

export {getTodos, createTodo, removeTodo, toggleTodo, loadTodos}
