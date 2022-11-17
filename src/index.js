const inputSearch = document.querySelector('input');
const searchBtn = document.querySelector('.search__btn');
const weatherInfo = document.querySelector('.weather__info');

let inputValue = inputSearch.value;

const getWeatherData = async (inputValue) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch.value}&appid=426e990cd458d405cfbad4f07392b191`);
        const data = await response.json();

        weatherInfo.innerHTML = `
            <h1 class="city__name">Weather in ${data.name}:</h1>
            <p class="temperature">Weather temperature: ${(data.main.temp - 273).toFixed(0)} (°C).</p>
            <p class="cloudiness">Cloudiness: ${data.weather[0].description}.</p>
            <p class="status">Wind: ${data.wind.speed} m/s.</p>
        `

    } catch(error) {
        console.log('Error >>>', error)
    }
}

searchBtn.addEventListener('click', () => {
    getWeatherData(inputValue);
})