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

  let innerDiv = makeElement("div", "inner-div");
  let heading = makeElement("h2", "logo");
  let searchDiv = makeElement("div", "search-div");
  let searchBar = makeElement("input", "search-bar");
  let submitButton = makeElement("button", "submit-button");
  let hiddenText = makeElement("p", "hidden-text");

  innerDiv.classList.add("landing-page");

  let value;

  heading.innerText = "weatherChecker";
  searchBar.type = "text";
  submitButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

  searchBar.addEventListener("input", () => {
    console.log(searchBar.value);
    hiddenText.innerText = "";
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

  innerDiv.appendChild(heading);
  innerDiv.appendChild(searchDiv);
  innerDiv.appendChild(hiddenText);

  searchDiv.appendChild(searchBar);
  searchDiv.appendChild(submitButton);

  content.appendChild(innerDiv);
};

export { createPage, makeElement };
