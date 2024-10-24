const session = require("express-session");

function mypage_check() {
  if (session.id) {
    document.querySelector("login").style.display = "none";
    document.querySelector("loginout").style.display = "block";
  } else {
    document.querySelector("login").style.display = "none";
    document.querySelector("loginout").style.display = "block";
  }
}

window.onload = () => {
  mypage_check();
};
