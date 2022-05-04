const splitMenu = document.getElementById("splitMenu");
const menuContainer = document.getElementById("menuContainer");
const addUser = document.getElementById("addUser");
const loginContainer = document.getElementById("loginContainer");
const loginButton = document.getElementById("loginButton");
const exitLoginButton = document.getElementById("exitLoginButton");
const deactivatedCircle = document.getElementById("deactivatedCircle");
const toActiveCircle = document.getElementById("toActiveCircle");
const closureBtn = document.getElementById("closureBtn");

splitMenu.onclick = function () {
    if (menuContainer.style.display == "none") {
      menuContainer.style.display = "flex";
      splitMenu.style.display = "none";
    } else {
      menuContainer.style.display = "none";
    }
};

addUser.onclick = function () {
    if (loginContainer.style.display == "none") {
      loginContainer.style.display = "flex";
    } else {
      loginContainer.style.display = "none";
    }
};

loginButton.onclick = function () {
    if (loginContainer.style.display == "none") {
      loginContainer.style.display = "flex";
    } else {
      loginContainer.style.display = "none";
    }
};

exitLoginButton.onclick = function () {
    if (loginContainer.style.display == "flex") {
      loginContainer.style.display = "none";
    } else {
      loginContainer.style.display = "flex";
    }
};

closureBtn.onclick = function () {
    if (menuContainer.style.display == "flex") {
        menuContainer.style.display = "none";
        splitMenu.style.display = "flex";
    } else {
        menuContainer.style.display = "flex";
    }
};