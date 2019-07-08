'use strict'
//fetch existing todos from local storage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todo')
    
    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    }catch (e){
        return []
    }
   
}

const saveTodos = (item) => {
    localStorage.setItem('todo',JSON.stringify(item));
}

const removeTodo = (id) => {
    const todoIndex = todo.findIndex((item) => item.id === id)
    if(todoIndex > -1) {
        todo.splice(todoIndex, 1)
    }
}

const renderTodos = (array, filters) => {
    
    let filteredTodos = array.filter((item) => item.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filteredTodos = filteredTodos.filter((todo) => {
        if(filters.hideCompleted){
            return !todo.isCompleted
        } else {
            return true
        }
    })
    const incompleteTodos = filteredTodos.filter((item) => !item.isCompleted)
    document.querySelector('#todo').innerHTML = ''
    document.querySelector('#todo').appendChild(generateSummaryDOM(incompleteTodos))
    filteredTodos.forEach((item) => {
        document.querySelector('#todo').appendChild(generateTodoDOM(item))
    })
}

//toggle the iscomplete value for a given todo
const toggleTodo = (id) => {
    const note = todo.find((item) => item.id === id)
    if (note){
        note.isCompleted = !note.isCompleted
    }
}

const generateTodoDOM = (item) => {
    const newEl = document.createElement('div')
    const newCheck = document.createElement('input')
    let newP = document.createElement('span')
    const button = document.createElement('button')
    
    newCheck.type = 'checkbox'
    newCheck.checked = item.isCompleted
    newCheck.addEventListener('change', (e) => {
        toggleTodo(item.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })
    newEl.appendChild(newCheck)

    newP.innerHTML = item.text
    newEl.appendChild(newP)

    button.innerText = 'x'
    newEl.appendChild(button)
    button.addEventListener('click', (e) => {
        removeTodo(item.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })

        return newEl
}

const generateSummaryDOM = (array) => {
    const summary = document.createElement('h2');
    summary.innerHTML = `you have ${array.length} todos left.`
    return summary
}