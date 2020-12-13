//baþlangýca atýlan function tanýmý
oldOnLoad = window.onload
window.onload = onLoad;
var w = window.innerWidth; //pencere geniþliði
var h = window.innerHeight; //pencere yüksekliði
//event baþlangýç
function onLoad() {
    Position();
}
function Position() { //metot iþlem yazýyon
    var TrainHeight = document.getElementById("train").style.height;
    var TrainWidth = document.getElementById("train").style.width;
    document.getElementById("train").style.width = (w * 3) + "px";
    document.getElementById("train").style.height = (h / 3) + "px";
    document.getElementById("train").style.top = "50%";
    document.getElementById("train").style.left = "50%";
    document.getElementById("train").style.marginLeft = -(TrainWidth / 2) + "px";
    document.getElementById("train").style.marginTop = -(TrainHeight / 2) + "px";
}