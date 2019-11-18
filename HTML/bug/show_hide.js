function ShowHide(divId) {
  var x = document.getElementById(divId);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
