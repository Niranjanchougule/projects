const openButton = document.querySelector(".blue");
const closeButton = document.querySelector(".red");

const textOne = document.querySelector(".name");
const textTwo = document.querySelector(".surname");

const textNamei = document.getElementById("namei");
const textSurnamei = document.getElementById("surnamei");

const textBoxx = document.getElementById("textboxx");
textBoxx.style.display = "none";
let bulebuttDisabled;
let redbuttDisabled;

openButton.addEventListener("click", function () {
  bulebuttDisabled = document.getElementById("bluetext").disabled = true;
  textBoxx.style.display = "block";
  redbuttDisabled = document.getElementById("redtext").disabled = false;
});

closeButton.addEventListener("click", function () {
  if (textNamei.value === "") {
    alert("name feild is mandatory !");
  } else {
    redbuttDisabled = document.getElementById("redtext").disabled = true;
    textBoxx.style.display = "none";
    bulebuttDisabled = document.getElementById("bluetext").disabled = false;
  }
});
