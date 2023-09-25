async function fetchWeatherData() {
    try {
        const city = document.getElementById("cityInput").value;
        if (!city) {
            throw new Error("Please enter a city name.");
        }

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1ed9302300424f6bbb7122401232109&q=${city}`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const weatherDataDiv = document.querySelector(".result");
        weatherDataDiv.innerHTML = `
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p class="trial">Condition: ${data.current.condition.text}</p>
      `;
    } catch (error) {
        console.error(error.message);
    }
}
