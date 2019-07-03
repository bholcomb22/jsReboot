let name = 'Ben Holcomb'

//console.log(name.length);

//console.log(name.toUpperCase());

let isValidPassword = function (password) {
    if (password.length > 8 && password.includes('password') == false) {
        return true
    } else {return false}
}

console.log(isValidPassword('asbjf'));
console.log(isValidPassword('abc123!@#%$#'));
console.log(isValidPassword('asbjfsdfaasfpassword'));