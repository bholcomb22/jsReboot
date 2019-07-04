
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

let getThingsToDo = function (array){
    return array.filter(function(item){
        return item.isCompleted === false
    })
}

console.log(getThingsToDo(todo))
//console.log(todo);