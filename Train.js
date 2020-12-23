//baþlangýca atýlan function tanýmý
oldOnLoad = window.onload
window.onload = onLoad;
var w = window.innerWidth; //pencere geniþliði
var h = window.innerHeight; //pencere yüksekliði
//event baþlangýç
var TrainHeight = 0;
var TrainWidth = 0;
function onLoad() {
    Position();
}
function Position() { //metot iþlem yazýyon
    document.getElementById("train").style.position = "absolute";
    document.getElementById("train").style.width = (w * 3) + "px";
    document.getElementById("train").style.height = (h / 1.5) + "px";
    TrainHeight = parseInt(document.getElementById("train").style.height);
    TrainWidth = parseInt(document.getElementById("train").style.width);
    document.getElementById("train").style.top = "50%";
    //document.getElementById("train").style.marginLeft = "-" + TrainWidth / 2 + "px";
    document.getElementById("train").style.marginTop = "-" + TrainHeight / 2 + "px";
    document.getElementById("train").style.backgroundColor = "red";
    document.getElementById("train").style.borderRadius = "128px 128px";
    document.getElementById("train").style.display = "in-line";

}

