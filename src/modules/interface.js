// js sheets
import searchFunction from "./search.js";
//style sheets
import "../styles/style.css";
import "../styles/reset.css";

const makeElement = function (ele, name) {
  let element = document.createElement(ele);

  element.classList.add(name);

  return element;
};

const createPage = function () {
  let content = document.querySelector(".content");
  content.innerHTML = "";

  // div holding logo and submit
  let innerDiv = makeElement("div", "inner-div");

  // div holding the logo
  let titleDiv = makeElement("div", "title-div");
  let headOne = makeElement("h2", "logo");
  let headTwo = makeElement("h2", "logo");

  // div holding searech and submit
  let searchDiv = makeElement("div", "search-div");
  let searchBar = makeElement("input", "search-bar");
  let submitButton = makeElement("button", "submit-button");

  let hiddenText = makeElement("p", "hidden-text");

  // div to hold the measurements (F to C) and back button
  let bottomInner = makeElement("div", "inner-bottom-div");
  bottomInner.innerHTML = "";

  innerDiv.classList.add("landing-page");

  let value;

  headOne.innerText = "weather";
  headOne.classList.add("weather-text");
  headTwo.innerText = "CheckR";
  headTwo.classList.add("checker-text");
  titleDiv.appendChild(headOne);
  titleDiv.appendChild(headTwo);

  searchBar.type = "text";
  submitButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

  searchBar.addEventListener("input", () => {
    hiddenText.innerText = "";
  });

  searchBar.addEventListener("keypress", (e) => {
    value = searchBar.value;

    // if no value
    if (!value) {
      hiddenText.innerText = "No Location entered";
    } else if (e.key === "Enter") {
      searchFunction(value);
    }
  });

  submitButton.addEventListener("click", () => {
    value = searchBar.value;

    // if no value
    if (!value) {
      hiddenText.innerText = "No Location entered";
    } else {
      // if there is value
      searchFunction(value);
    }
  });

  let footerDiv = makeElement("footer", "footer");
  let footerText = makeElement("p", "footer-text");
  footerDiv.appendChild(footerText);
  footerText.innerHTML = `Weather API: <a class="link" href="https://openweathermap.org/" target="_blank">OpenWeather</a><br>
  Made by <a class="link" href="https://github.com/TidalSana" target="_blank">
  <i class="fa-brands fa-github"></i>TidalSana</a>.2022.`;

  innerDiv.appendChild(titleDiv);
  innerDiv.appendChild(searchDiv);
  innerDiv.appendChild(hiddenText);

  searchDiv.appendChild(searchBar);
  searchDiv.appendChild(submitButton);

  content.appendChild(innerDiv);
  content.appendChild(bottomInner);

  document.body.appendChild(footerDiv);
};

export { createPage, makeElement };
