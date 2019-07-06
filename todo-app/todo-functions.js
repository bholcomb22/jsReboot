//fetch existing todos from local storage

const getSavedTodos = function() {
    const todoJSON = localStorage.getItem('todo')
    if(todoJSON != null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

const saveTodos = function(item){
    localStorage.setItem('todo',JSON.stringify(item));
}

const removeTodo = function(id) {
    const todoIndex = todo.findIndex(function(item){
        return item.id === id
    })
    if(todoIndex > -1) {
        todo.splice(todoIndex, 1)
    }
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
    document.querySelector('#todo').appendChild(generateSummaryDOM(incompleteTodos))
    filteredTodos.forEach(function(item){
        document.querySelector('#todo').appendChild(generateTodoDOM(item))
    })
}

//toggle the iscomplete value for a given todo
const toggleTodo = function(id){
    const note = todo.find(function(item){
        return item.id === id
    })
    if (note.isCompleted !== undefined){
        note.isCompleted = !note.isCompleted
    }
}

const generateTodoDOM = function (item){
    const newEl = document.createElement('div')
    const newCheck = document.createElement('input')
    let newP = document.createElement('span')
    const button = document.createElement('button')
    
    newCheck.type = 'checkbox'
    newCheck.checked = item.isCompleted
    newCheck.addEventListener('change', function(e){
        toggleTodo(item.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })
    newEl.appendChild(newCheck)

    newP.innerHTML = item.text
    newEl.appendChild(newP)

    button.innerText = 'x'
    newEl.appendChild(button)
    button.addEventListener('click', function(e){
        removeTodo(item.id)
        saveTodos(todo)
        renderTodos(todo, filters)
    })

        return newEl
}

const generateSummaryDOM = function(array) {
    const summary = document.createElement('h2');
    summary.innerHTML = `you have ${array.length} todos left.`
    return summary
}