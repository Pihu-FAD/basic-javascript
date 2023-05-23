const inputBox = document.querySelector('.inputBox');
const searchBtn = document.querySelector('#searchBtn');
const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

async function checkWeather(city){
    const api_key = "d5d181936e5d647df29dc50b5eec6fea";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    
temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
wind.innerHTML = `${weather_data.wind.speed}Km/h`;
description.innerHTML = `${weather_data.weather[0].description}`;
console.log(weather_data);
}



searchBtn.addEventListener('click', ()=>{
checkWeather(inputBox.value);
});




