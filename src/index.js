// Functions 
function getWeather(zip, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`



    return fetch(path).then(res => res.json())
    // const resPromise = fetch(path)
    // const jsonPromise = resPromis.then(res => res.json())
    
    // return jsonPromise

    // fetch(path)
    //     .then(res => res.json())
    //     .then(json => successCallback(json) )
    //     .catch(err => console.log(err.message))
}

export {
    getWeather
}

 