const apiKey = '9fd788d24af4c2de4bbedb73eda0d75d'; 
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherInfo');

// Function to fetch weather data based on the city
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if the city is valid
    if (data.cod === '404') {
      alert('City not found. Please try again.');
      return;
    }

    // Extract relevant data from the API response
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `${data.main.temp}°C`;
    const description = data.weather[0].description;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

    // Update the UI with weather information
    document.getElementById('location').innerText = `Location: ${location}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('windSpeed').innerText = windSpeed;
  } catch (error) {
    alert('Failed to fetch weather data. Please try again later.');
  }
}

// Event listener to handle button click
getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});
