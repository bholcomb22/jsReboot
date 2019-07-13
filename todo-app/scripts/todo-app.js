'use strict'
let todo = getSavedTodos()


const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todo, filters);

document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.todoInput.value.trim()
    e.preventDefault();
    if(text.length > 0) {
        todo.push({
            id: uuidv4(), 
            text, 
            isCompleted: false
        })
        saveTodos(todo);
        e.target.elements.todoInput.value = ''
        renderTodos(todo, filters)
    } else {
        
    }
    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    e.preventDefault()
    filters.hideCompleted = e.target.checked
    renderTodos(todo, filters)
})

