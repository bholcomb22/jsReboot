const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
     if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
     } else {
         throw new Error ('unable to get puzzle')
     }
}


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        const country = data.find((item) => item.alpha2Code === countryCode)
        return country.name
    }else {
        throw new Error('Error has taken place')
    }   
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=e211c24718f7e2')
    if (response.status === 200) {
        return response.json()
    }else {
        throw new Error('Error finding information')
    }
}

