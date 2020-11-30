import API from "./API.js";
// Your code here

const loginButton = document.querySelector(".login_button");
const userNameInput = document.querySelector("#userName");
let usersNames = [];
let users = {};

API.getUsers().then((data) => {
  usersNames = data.map((el) => el.name);
  console.log(usersNames);
});

API.getUsers().then((data) => {
  users = data.map((el) => el);
});

loginButton.addEventListener("click", (event) => {
  if (usersNames.includes(userNameInput.value) === true) {
    const userLoggedIn = users.find(({ name }) => name === userNameInput.value);
    localStorage.setItem("UserLoggedInId", userLoggedIn.id);
    localStorage.setItem("UserLoggedInName", userLoggedIn.name);
    localStorage.setItem("UserLoggedInAvatar", userLoggedIn.avatar_url);
    window.location.href = "mainfeed.html";
  }
});
