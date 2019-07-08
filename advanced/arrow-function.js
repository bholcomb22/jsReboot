const square = (num) => num * num


const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Ben',
    age: 29
},{
    name: 'Amelia',
    age: 30
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

//find the person with age 27
//print the persons name

const age27 = people.find((person) => person.age === 27)
console.log(age27.name)