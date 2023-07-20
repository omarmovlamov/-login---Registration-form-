const mainCard = document.querySelector(".main-card");
const login = document.querySelector("#login");
const signup = document.querySelector("#sign-up");
const cardContentRight = document.querySelector(".main-card-content-right");
const cardContentLeft = document.querySelector(".main-card-content-left");
const cardSignUp = document.querySelector(".card-signup");
const cardLogin = document.querySelector(".card-login");
login.addEventListener("click", () => {
  cardContentRight.style.display = "block";
  cardContentLeft.style.display = "none";

  cardSignUp.style.display = "none";
  cardLogin.style.display = "flex";

  mainCard.style.background = "rgb(82,86,173)";
  mainCard.style.background =
    "linear-gradient(310deg, rgba(82,86,173,1) 0%, rgba(255,255,255,1) 100%)";
});
signup.addEventListener("click", () => {
  cardContentRight.style.display = "none";
  cardContentLeft.style.display = "block";

  cardSignUp.style.display = "flex";
  cardLogin.style.display = "none";

  mainCard.style.background = "rgb(82,86,173)";
  mainCard.style.background =
    "linear-gradient(-310deg, rgba(82,86,173,1) 0%, rgba(255,255,255,1) 100%)";
});
