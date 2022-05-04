const login = document.getElementById("loginContainer");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const finishedRegisterBtn = document.getElementById("finishedRegister");
const register = document.getElementById("registerContainer");

registerBtn.onclick = function () {
  if (register.style.display == "none") {
    register.style.display = "flex";
    login.style.display = "none";
  } else {
    register.style.display = "none";
  }
};

loginBtn.onclick = function () {
    if (login.style.display == "none") {
      login.style.display = "flex";
      register.style.display = "none";
    } else {
      login.style.display = "none";
    }
};

finishedRegisterBtn.onclick = function () {
    if (login.style.display == "none") {
      login.style.display = "flex";
      register.style.display = "none";
    } else {
      login.style.display = "none";
    }
};