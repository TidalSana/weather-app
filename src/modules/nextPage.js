// js sheets
import { makeElement, createPage } from "./interface";
import { switchMetric, switchImperial } from "./units.js";

const makeNext = function (data, city) {
  let content = document.querySelector(".content");
  let innerDiv = document.querySelector(".inner-div");
  let bottomInner = document.querySelector(".inner-bottom-div");
  innerDiv.classList.remove("landing-page");
  innerDiv.classList.add("showing-weather");

  innerDiv.innerHTML = "";

  // div to hold the main weather stuff
  let topDiv = makeElement("div", "top-section");

  // shows current temperature
  let currentTemp = makeElement("div", "current-temp-div");
  let headingTemp = makeElement("h1", "current-temp");
  let temp = data.main.temp;
  headingTemp.innerHTML = Math.round(temp) + "&#176;" + "F";
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
  feelText.innerHTML = Math.round(feels) + "&#176;" + "F";
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

  bottomInner.innerHTML = "";
  // button to change from Fahrenheit to Celsius
  let measurementsDiv = makeElement("div", "measure-div");
  let measurementsBtn = makeElement("button", "measure-button");
  measurementsDiv.appendChild(measurementsBtn);

  measurementsBtn.innerHTML = "&#176;" + "C";

  measurementsBtn.addEventListener("click", () => {
    // if its F, switch Celsius
    if (measurementsBtn.innerHTML.includes("C")) {
      measurementsBtn.innerHTML = "&#176;" + "F";
      switchMetric(city);
    } else {
      measurementsBtn.innerHTML = "&#176;" + "C";
      switchImperial(city);
    }
  });

  // button to return to search page
  let returnDiv = makeElement("div", "return-div");
  let returnBtn = makeElement("button", "return-button");
  returnDiv.appendChild(returnBtn);

  returnBtn.innerHTML = `<i class="fa-solid fa-angles-left"></i>` + " return";
  returnBtn.addEventListener("click", createPage);

  bottomDiv.appendChild(feelDiv);
  bottomDiv.appendChild(windDiv);
  bottomDiv.appendChild(humidDiv);

  innerDiv.appendChild(returnDiv);
  innerDiv.appendChild(topDiv);
  innerDiv.appendChild(bottomDiv);

  bottomInner.appendChild(measurementsDiv);
};

export default makeNext;
