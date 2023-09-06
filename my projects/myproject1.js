const buttOpen = document.getElementById("bluetext");
const buttclose = document.getElementById("redtext");

const openField = document.getElementById("textboxx");
openField.style.display = "none";
buttclose.style.display = "none";

buttOpen.addEventListener("click", function () {
  openField.style.display = "block";
  buttOpen.style.display = "none";
  buttclose.style.display = "block";
});

buttclose.addEventListener("click", function () {
  openField.style.display = "none";
  buttclose.style.display = "none";
  buttOpen.style.display = "block";
});
