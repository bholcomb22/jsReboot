const Hangman = function(word, remainingGuesses,){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['a']
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else
        puzzle += '*'
    })

    return puzzle
}


const game1 = new Hangman('developer', 5)
const game2 = new Hangman('ass', 3, ['a', 'b'])


console.log(game2.getPuzzle())