const getPuzzle = (wordCount) => {
     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch country info')
        }
    }).then((data) => data.find((item) => item.alpha2Code === countryCode)
           ).then((data) => {
            return data.name
        })  
        
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=e211c24718f7e2').then((response) => {
        if (response.status === 200) {
            return response.json()
        }else {
            throw new Error('Error finding information')
        }
    }).then((data) => {
        return data
    })
}

