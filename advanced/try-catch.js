const getTip = (amount) => {
    if (typeof amount === 'number'){
    return amount * .25
    } else {
        throw Error('argument must be a number')
    }
}

try {
    getTip(false)
} catch (e) {
    
}

const result = getTip(true)

console.log(result)