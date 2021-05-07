// Functions 
async function getWeather(zip, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    
    const res = await fetch(path)
    const json = await res.json()
    const weatherData = {
        code: json.cod,
        coord: json.coord,
        tem: json.main.temp,
        feels_like: json.main.feels_like,
        temp_max: json.main.temp_max,
        description: json.weather[0].description
    }
    return weatherData
}  return fetch(path).then(res => res.json())
export {
    getWeather 
}
