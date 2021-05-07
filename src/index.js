// Functions 

function getWeatherByZip(apiKey, zip, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    return getWeather(path)
}

function getWeatherByCity(apiKey, city, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    return getWeather(path)
}

function getWeatherByGeo(apiKey, lat, lon, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    return getWeather(path)
}
async function getWeather(path) {
    try { 
    const res = await fetch(path)
    const json = await res.json()
    const weatherData = {
        code: json.cod,
        cordinates: json.coord,
        temp: json.main.temp,
        feels_like: json.main.feels_like,
        tem_min: json.main.temp_min,
        temp_max: json.main.temp_max,
        description: json.weather[0].description
    }
    return weatherData
}   catch(err) {
    return err //handling the error
    }
}
export {
    getWeatherByZip,
    getWeatherByCity,
    getWeatherByGeo,
    getWeather
}
