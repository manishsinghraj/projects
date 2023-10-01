const apiKey = '5aef23acb6dce58a7de7eab676b10ef8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&apiKey=${apiKey}`);
    var data = await response.json();
    console.log(JSON.stringify(data));

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " ℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    const weatherCondition = (data.weather[0].main).toLowerCase();
    console.log(weatherCondition);

    if (weatherCondition == "clouds") {
        weatherIcon.src = 'weather-app-img/images/Clouds.png'
    } else if (weatherCondition == "clear") {
        weatherIcon.src = 'weather-app-img/images/Clear.png'
    } else if (weatherCondition == "rain") {
        weatherIcon.src = 'weather-app-img/images/Rain.png'
    } else if (weatherCondition == "drizzle") {
        weatherIcon.src = 'weather-app-img/images/drizzle.png'
    } else if (weatherCondition == "mist") {
        weatherIcon.src = 'weather-app-img/images/mist.png'
    } else if (weatherCondition == "snow") {
        weatherIcon.src = 'weather-app-img/images/snow.png'
    }

    document.querySelector('.weather').style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


