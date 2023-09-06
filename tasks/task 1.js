const openButton = document.querySelector(".blue");
const closeButton = document.querySelector(".red");

const textOne = document.querySelector(".name");
const textTwo = document.querySelector(".surname");

const textbox = document.getElementById("textboxx");
textbox.style.display = "none";
let bulebuttDisabled;
let redbuttDisabled;

openButton.addEventListener("click", function () {
  console.log("hi");
  bulebuttDisabled = document.getElementById("bluetext").disabled = true;
  textbox.style.display = "block";
  redbuttDisabled = document.getElementById("redtext").disabled = false;

  //   if (textbox.style.display === "none") {
  //     textbox.style.display = "block";
  //   } else {
  //     textbox.style.display = "none";
  //   }
});

closeButton.addEventListener("click", function () {
  console.log(1 + 2);
  redbuttDisabled = document.getElementById("redtext").disabled = true;
  textbox.style.display = "none";
  bulebuttDisabled = document.getElementById("bluetext").disabled = false;
  //   if (textbox.style.display === "block" && bulebuttDisabled === true) {
  //     ;
  //   }
});
