
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

//sort by completed
const sortTodos = function(array){
    array.sort(function(a, b){
        if(a.isCompleted < b.isCompleted) {
            return -1
        } else if(b.isCompleted < a.isCompleted) {
            return 1
        } else {
            return 0
        }
    })
}
//1. convert to array of objects -> text, isCompleted (boolean)
//2. create a function to remove a to do by input text

let deleteTodo = function(array, search) {
    const index = array.findIndex(function(item, index){
       return item.text.toLowerCase() === search.toLowerCase()
    })
    if(index > -1){
        array.splice(index, 1);
    }

}

//** function that returns a new array that has the false items
let getThingsToDo = function (array){
    return array.filter(function(item){
        return item.isCompleted === false
    })
}

console.log(sortTodos(todo));
console.log(todo);
//console.log(todo);