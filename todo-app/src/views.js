import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'



const renderTodos = () => {
    const todoEl = document.querySelector('#todo')
    const filters = getFilters()
    let filteredTodos = getTodos().filter((item) => item.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filteredTodos = filteredTodos.filter((todo) => {
        if(filters.hideCompleted){
            return !todo.isCompleted
        } else {
            return true
        }
    })
    const incompleteTodos = filteredTodos.filter((item) => !item.isCompleted)
    
    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if(todo.length === 0 ) {
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

// renderTodos
// Arguments: none
// Return value: none



// generateTodoDOM
// Arguments: todo
// Return value: the todo element

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
        renderTodos()
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
        renderTodos()
    })
        return todoEl
}

const generateSummaryDOM = (todo) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    if (todo.length === 1) {
        summary.innerHTML = `you have ${todo.length} todo left.`
    } else {
        summary.innerHTML = `you have ${todo.length} todos left.`
    }
    
    return summary
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element


export {generateTodoDOM, generateSummaryDOM, renderTodos }
// Make sure to set up the exports