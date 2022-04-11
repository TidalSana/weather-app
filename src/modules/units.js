// js sheets
import makeNext from "./nextPage.js";

const changeSymbols = function (data, speed, units) {
  let tempText = document.querySelector(".current-temp");
  let feelsText = document.querySelector(".feel-text");
  let windText = document.querySelector(".wind-text");
  let humidityText = document.querySelector(".humid-text");

  let temp = data.main.temp;
  let feels = data.main.feels_like;
  let wind = data.wind.speed;
  let humidity = data.main.humidity;

  tempText.innerHTML = Math.round(temp) + "&#176;" + units;
  feelsText.innerHTML = Math.round(feels) + "&#176;";
  windText.innerHTML = Math.round(wind) + speed;
  humidityText.innerHTML = humidity + "%";
};

// swithces to metric units
const switchImperial = async function (city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b015a76007bd45bbf3a391fc38c775ad&units=imperial`,
    { mode: "cors" }
  );
  let weatherData = await response.json();

  console.log(weatherData);
  // if no error
  if (!("message" in weatherData)) {
    changeSymbols(weatherData, " mph", "F");
  } else {
    // if error
    hiddenText.innerText = "Invalid location";
    console.log("error");
  }
};

// switches to imperial
const switchMetric = async function (city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b015a76007bd45bbf3a391fc38c775ad&units=metric`,
    { mode: "cors" }
  );
  let weatherData = await response.json();

  // if no error
  if (!("message" in weatherData)) {
    changeSymbols(weatherData, " km/h", "C");
  } else {
    // if error
    hiddenText.innerText = "Invalid location";
    console.log("error");
  }
};

export { switchMetric, switchImperial };
