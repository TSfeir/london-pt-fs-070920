if (!localStorage.token) {
  window.location.href = `/`;
}

fetch("http://localhost:3100/tokenVerification", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ token: localStorage.token }),
}).then((resp) => {
  if (resp.status !== 200) {
    window.location.href = `/`;
  }
});

const LogoutBtn = document.getElementById("logout");

LogoutBtn.addEventListener("click", (event) => {
  window.location.href = "/";
  localStorage.removeItem("token");
});
