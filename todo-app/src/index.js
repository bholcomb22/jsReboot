
import {renderTodos} from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'


renderTodos();

document.querySelector('#filter-todo').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.todoInput.value.trim()
    e.preventDefault();
    if(text.length > 0) {
        
        createTodo(text)
        renderTodos()
        e.target.elements.todoInput.value = ''
    } else {
        
    }
    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
