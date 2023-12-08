function getWeather() {
    const apiKey = 'SK-API-KEY';
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput.value === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherHtml = `<p>City: ${cityName}</p>
                                 <p>Temperature: ${temperature}°C</p>
                                 <p>Description: ${description}</p>`;

            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
