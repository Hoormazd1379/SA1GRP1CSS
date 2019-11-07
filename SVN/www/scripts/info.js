boxID = document.getElementById("infoBox");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 500) {
        boxID.className = "infoPage show"
    } else {
        boxID.className = "infoPage hide"
    }
};

window.addEventListener("scroll", myScrollFunc);