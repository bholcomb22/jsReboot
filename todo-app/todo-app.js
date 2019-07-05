const todo = [{
    text:'wash the dog',
    isCompleted: false
}, {
    text: 'groceries',
    isCompleted: true
}, {
    text: 'code',
    isCompleted: false
},{
    text: 'cook',
    isCompleted: true
}, {
    text:'do the dishes',
    isCompleted: false
}];

//setup a div contain for todos
//setup filters (searchText) and wire up a new filter input to change it
// create a renderTodos function to render and rerender the latest filtered data
const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (array, filters){
    document.querySelector('#todo').innerHTML = ''
    const filteredTodos = array.filter(function(item){
        return item.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const incompleteTodos = filteredTodos.filter(function(item){
        return !item.isCompleted
    })
    
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
    e.target.elements.todoInput.value = ''
    renderTodos(todo, filters)
})

document.querySelector('#new-todo').addEventListener('change', function(e){
    e.preventDefault()
    if(e.target.checked) {
        filters.hideCompleted = !filters.hideCompleted
    } else {
        renderTodos(todo, filters)
    }
})

