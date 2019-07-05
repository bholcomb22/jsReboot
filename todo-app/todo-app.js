let todo = [];


const filters = {
    searchText: '',
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todo')
if(todoJSON != null) {
    todo = JSON.parse(todoJSON)
}

const renderTodos = function (array, filters){
    
    let filteredTodos = array.filter(function(item){
        return item.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function(todo){
        if(filters.hideCompleted){
            return !todo.isCompleted
        } else {
            return true
        }
    })
    const incompleteTodos = filteredTodos.filter(function(item){
        return !item.isCompleted
    })
    document.querySelector('#todo').innerHTML = ''
    const summary = document.createElement('h2');
    summary.innerHTML = `you have ${incompleteTodos.length} todos left.`
    document.querySelector('#todo').appendChild(summary)
    
    filteredTodos.forEach(function(item){
        let newP = document.createElement('p');
        newP.innerHTML = item.text
        document.querySelector('#todo').appendChild(newP)
    })
}

renderTodos(todo, filters);

document.querySelector('#filter-todo').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault();
    todo.push({text: e.target.elements.todoInput.value, isCompleted: false})
    localStorage.setItem('todo',JSON.stringify(todo));
    e.target.elements.todoInput.value = ''
    renderTodos(todo, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    e.preventDefault()
    filters.hideCompleted = e.target.checked
    renderTodos(todo, filters)
})

