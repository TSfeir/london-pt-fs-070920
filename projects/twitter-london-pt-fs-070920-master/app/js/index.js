import API from "./API.js";
// Your code here

const loginButton = document.querySelector(".login_button");
const userNameInput = document.querySelector("#userName");

loginButton.addEventListener("click", (event) => {
  if (userNameInput.value === "Thomas") {
    window.location.href = "mainfeed.html";
  }
});

API.getTweets();
