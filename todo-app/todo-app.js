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
    e.preventDefault();
    todo.push({
        id: uuidv4(), 
        text: e.target.elements.todoInput.value, 
        isCompleted: false
    })
    saveTodos(todo);
    e.target.elements.todoInput.value = ''
    renderTodos(todo, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    e.preventDefault()
    filters.hideCompleted = e.target.checked
    renderTodos(todo, filters)
})

