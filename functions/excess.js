getCountry('MX').then((country) => {
    return country
}).catch((err)=> {
    console.log(err)
})

getCurrentCountry().then((country) => {
    console.log(country)
}).catch((err) => {
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
