// js sheets
import { makeElement } from "./interface";

const makeNext = function (data) {
  let content = document.querySelector(".content");
  let innerDiv = document.querySelector(".inner-div");
  innerDiv.classList.remove("landing-page");
  innerDiv.classList.add("showing-weather");

  innerDiv.innerHTML = "";

  let bottomInner = makeElement("div", "inner-bottom-div");

  // div to hold the first section
  let topDiv = makeElement("div", "top-section");

  // shows current temperature
  let currentTemp = makeElement("div", "current-temp-div");
  let headingTemp = makeElement("h1", "current-temp");
  let temp = data.main.temp;
  headingTemp.innerHTML = Math.round(temp) + "&#176;";
  currentTemp.appendChild(headingTemp);

  // shows description
  let descDiv = makeElement("div", "desc-div");
  let descText = makeElement("h2", "desc-text");
  let desc = data.weather[0].description;
  descText.innerHTML = desc;
  descDiv.appendChild(descText);

  topDiv.appendChild(currentTemp);
  topDiv.appendChild(descDiv);

  // div to hold the bottom div
  let bottomDiv = makeElement("div", "bottom-section");

  // feels like
  let feelDiv = makeElement("div", "extra");
  let feelText = makeElement("h3", "feel-text");
  let feels = data.main.feels_like;
  feelDiv.innerHTML = "Feels like: ";
  feelText.innerHTML = Math.round(feels) + "&#176;";
  feelDiv.appendChild(feelText);

  // shows wind speed
  let windDiv = makeElement("div", "extra");
  let windText = makeElement("h3", "wind-text");
  let wind = data.wind.speed;
  windDiv.innerHTML = "Wind:";
  windText.innerHTML = Math.round(wind) + " mph";
  windDiv.appendChild(windText);

  // shows humidity
  let humidDiv = makeElement("div", "extra");
  let humidText = makeElement("h3", "humid-text");
  let humidity = data.main.humidity;
  humidDiv.innerHTML = "Humidity";
  humidText.innerHTML = humidity + "%";
  humidDiv.appendChild(humidText);

  bottomDiv.appendChild(feelDiv);
  bottomDiv.appendChild(windDiv);
  bottomDiv.appendChild(humidDiv);

  innerDiv.appendChild(topDiv);
  innerDiv.appendChild(bottomDiv);

  content.appendChild(bottomInner);
};

export default makeNext;
