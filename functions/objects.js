// pass in f
// return object with celcius and kelvin

let convert = function (fTemp){
    return {
        ferenheit: fTemp,
        celcius: (fTemp -32) * 5/9,
        kelvin: (fTemp + 459.67) * 5/9
    }
}

let test = convert(32);
console.log(test);