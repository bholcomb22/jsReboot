
class Person {
    constructor(first, last, age, likes = []) {
        this.first = first
        this.last = last
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.first} ${this.last} is ${this.age} years old.`

        this.likes.forEach((like) => {
            bio += ` ${this.first} likes ${like}.`
    })

    return bio
    }
     set fullName(fullName) {
        let parsedFirst = fullName.split(' ')
        this.first = parsedFirst[0]
        this.last = parsedFirst[1]
    }
    get fullName(){
        return `${this.first} ${this.last}`
    }
}

class Employee extends Person {
    constructor(first, last, age, position, likes){
        super(first, last, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(first, last, age, grade, likes){
        super(first, last, age, likes)
        this.grade = grade
    }
    getBio(){
        const status = this.grade >= 70 ? 'passing' : 'failing' 
        return `${this.first} ${this.last} is currently ${status}`
    }
    updateGrade(number){
        this.grade += number
    }
}
const me = new Employee('Ben', 'Holcomb', 29, 'developer')
me.fullName = 'Amelia Holcomb'

console.log(me.getBio())


