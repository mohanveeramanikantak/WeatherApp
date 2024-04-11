const apiKey = 'e60e03853f10f07d485cc241c5def41b'; 
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        weatherInfo.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error(error);
        weatherInfo.innerHTML = `<p>Error: City not found!</p>`;
      });
  } else {
    weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
  }
});


