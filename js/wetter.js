const apiKey = "dein_geheimer_schlüssel";
const city = "Darmstadt,de";

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=de&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    document.getElementById("weather-temp").textContent = `${temp}°C`;
    document.getElementById("weather-desc").textContent = description;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  } catch (error) {
    console.error("Wetterdaten konnten nicht geladen werden:", error);
  }
}

fetchWeather();
