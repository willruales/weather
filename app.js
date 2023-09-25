function fetchWeatherData() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        return Promise.reject(new Error("Please enter a city name."));
    }

    return fetch(`https://api.weatherapi.com/v1/current.json?key=1ed9302300424f6bbb7122401232109&q=${city}`, { mode: 'cors' })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const weatherDataDiv = document.querySelector(".result");
            weatherDataDiv.innerHTML = `
          <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
          <p>Temperature: ${data.current.temp_c}°C</p>
          <p class="trial">Condition: ${data.current.condition.text}</p>
        `;
            return data;
        })
        .catch((error) => {
            console.error(error.message);
            throw error;
        });
}

// Example usage:
fetchWeatherData()
    .then((data) => {
        console.log("Weather data:", data);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });