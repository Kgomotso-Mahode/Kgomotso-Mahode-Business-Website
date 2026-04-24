import { register, login } from "./auth.js";

window.registerUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  register(email, password)
    .then(() => {
      alert("Registered!");
      window.location.href = "home.html";
    })
    .catch((err) => alert(err.message));
};

window.loginUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  login(email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "home.html";
    })
    .catch((err) => alert(err.message));
};
