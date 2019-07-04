let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


//generate a number between 10-20
let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min +1)) + min;
console.log(randomNum);

//challenge 
//take in a guess between 1-5 true if correct false if not correct
let makeGuess = function (guess){
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min +1)) + min;
    return randomNum == guess;
}

console.log(makeGuess(1));