//convert f to c

let temp = 100;

let convert = function (temperature) {
    let converted = (temperature - 32) * 5/9
    return converted;
}

let test = convert(temp);

console.log(test);

//tip  challenge

let tip = function (total, percent) {
    return `A ${percent * 100}% tip on a $${total} bill would be $${total * percent}!`
}

let tryIt = tip(24.32, .2);
console.log(tryIt);