import { API_KEY } from "./API_KEY.js";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.alt = "icon";
      weatherIcon.id = "weather-icon";
      const weatherRow = document.querySelector("#weather li:first-child");
      weatherRow.appendChild(weatherIcon);
      const weather = document.querySelector("#weather li:first-child span");
      const city = document.querySelector("#weather li:last-child span");
      weather.innerText = `${Math.ceil(data.main.temp)}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const weatherContainer = document.querySelector("#weather");
weatherContainer.addEventListener("click", goToKMA);

function goToKMA() {
  window.open("https://www.weather.go.kr/", "_blank");
}
