const Person = function(first, last, age, likes = []) {
    this.first = first
    this.last = last
    this.age = age
    this.likes = likes
}
console.log()

Person.prototype.getBio = function(){
    let bio = `${this.first} ${this.last} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio += ` ${this.first} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function(fullName){
    let parsedFirst = fullName.split(' ')
    this.first = parsedFirst[0]
    this.last = parsedFirst[1]
    //console.log(this)
}
    


const amelia = new Person('Amelia', 'Holcomb', 30, ['cuddling', 'being cute'])

console.log(amelia.getBio())