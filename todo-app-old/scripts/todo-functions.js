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
    const todoEl = document.querySelector('#todo')
    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if(array.length === 0 ) {
        const emptyMessage = document.createElement('p')
        emptyMessage.innerText = 'No todos to show.'
        emptyMessage.classList.add('empty-message')
        todoEl.appendChild(emptyMessage)
        
    }else {
        filteredTodos.forEach((item) => {
            todoEl.appendChild(generateTodoDOM(item))
        })
    }
    
}

//toggle the iscomplete value for a given todo
const toggleTodo = (id) => {
    const note = todo.find((item) => item.id === id)
    if (note){
        note.isCompleted = !note.isCompleted
    }
}

const generateTodoDOM = (item) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    let todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    checkbox.type = 'checkbox'
    checkbox.checked = item.isCompleted
    checkbox.addEventListener('change', (e) => {
        toggleTodo(item.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })
    containerEl.appendChild(checkbox)

    todoText.innerHTML = item.text
    containerEl.appendChild(todoText)

    //setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    removeButton.innerText = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', (e) => {
        removeTodo(item.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })
        return todoEl
}

const generateSummaryDOM = (array) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    if (array.length === 1) {
        summary.innerHTML = `you have ${array.length} todo left.`
    } else {
        summary.innerHTML = `you have ${array.length} todos left.`
    }
    
    return summary
}