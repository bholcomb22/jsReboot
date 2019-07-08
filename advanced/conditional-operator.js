

// const myAge = 29
// let message = myAge >= 18 ? 'you can vote' : 'you cannot vote'


// console.log(message)

const myAge = 29
const showPage = () => {
    console.log('showing the page')
}
const showErrorPage = () => {
    console.log('showing error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['tyler', 'porter', 'amelia', 'ben', 'matt']

team.length <= 4 ? console.log(`team size: ${team.length}`) : console.log('Too many people on your team')