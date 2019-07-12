// const createCounter = () => {
//     let count = 0
//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         }
//     }
// }

// const counter = createCounter()

// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())

// const createAdder = (a) => {
//     return (b) => {
//         return a + b
//     }
// }

// const add10 = createAdder(10)

// console.log(add10(-2))
// console.log(add10(20))

// const add100 = createAdder(100)
// console.log(add100(-90))

//tipper

const tipper = (tipPercent) => {
    return (billAmount) => {
        return billAmount * tipPercent
    }
}

const tip20 = tipper(.20)
const tip15 = tipper(.15)
console.log(tip20(20))
console.log(tip20(88))
console.log(tip15(20))