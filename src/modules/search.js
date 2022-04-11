// js sheets
import makeNext from "./nextPage.js";

const searchFunction = async function (city) {
  let hiddenText = document.querySelector(".hidden-text");
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b015a76007bd45bbf3a391fc38c775ad&units=imperial`,
    { mode: "cors" }
  );
  let weatherData = await response.json();
  console.log(weatherData);

  // if no error
  if (!("message" in weatherData)) {
    makeNext(weatherData, city);
  } else {
    // if error
    hiddenText.innerText = "Invalid location";
    console.log("error");
  }
};

export default searchFunction;
