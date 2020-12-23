const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");
console.log(JSON.stringify({ token: localStorage.token }));

if (localStorage.token) {
  fetch("http://localhost:3100/tokenVerification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.token }),
  })
    .then((resp) => {
      if (resp.status === 200) {
        window.location.href = `/home`;
      } else {
        console.log("Hello");
      }
    })
    .catch((error) => console.log("Error:", error));
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = event.target.querySelectorAll("input");
  const userObject = [...inputs].reduce((acc, input) => {
    acc[input.name] = input.value;
    return acc;
  }, {});

  if (userObject.value === undefined) {
    window.location.href = "/";
    localStorage.removeItem("token");
  } else {
    fetch("http://localhost:3100/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.token = data.token;
        window.location.href = `/home`;
      })
      .catch((error) => console.log("Error:", error.errorMessage));
  }
});
