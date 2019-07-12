


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('New Jersey', 5)

puzzleEl.innerHTML = game1.puzzle
guessesEl.innerHTML = `Guesses left: ${game1.statusMessage}`

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    
})

 getPuzzle('3').then((puzzle) => {
     console.log(puzzle)
 }).catch((err) => {
    console.log(`error: ${err}`)
}) 

getCountry('US').then((country) => {
    return country
}).catch((err)=> {
    console.log(err)
})


getLocation().then((data) => {
    return getCountry(data.country)
}).then((data)=> {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

//console.log(`City: ${data.city} Region: ${data.region} Contury: ${data.country}`)
    

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })

