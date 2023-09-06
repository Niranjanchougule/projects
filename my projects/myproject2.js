const butttoggle = document.getElementById("bluetext");

const formSheet = document.getElementById("textboxx");

formSheet.style.display = "none";

butttoggle.value = "open";

butttoggle.addEventListener("click", function () {
  butttoggle.value = "close";
  if (formSheet.style.display === "none") {
    formSheet.style.display = "block";
  } else {
    formSheet.style.display = "none";
  }
});
