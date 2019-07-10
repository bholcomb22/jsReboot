


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

 getPuzzle((error, puzzle) => {
     if(error) {
         console.log(`Error: ${error}`)
     }else {
        console.log(puzzle)
     }
})



// const request2 = new XMLHttpRequest()
// request2.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         let answer = ''
//         const myCountry = data.forEach((item) => {
//             if (item.alpha2Code === "US")
//             answer = ` Country Code: ${item.alpha2Code} Country:${item.name}`
//         })
//         console.log(answer)
//     }
// })

// request2.open('GET', 'http://restcountries.eu/rest/v2/all')
// request2.send()