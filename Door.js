// JavaScript source code
oldOnLoad = window.onload
window.onload = onLoad;
var myVar;
var TransDivH;
var TransDivW;
function onLoad() {
    myVar = setInterval(abc, 100);
}
function abc() {
    document.getElementById("transdiv").style.position = "absolute";
    document.getElementById("transdiv").style.width = w + "px";
    document.getElementById("transdiv").style.height = h+ "px";
    TransDivH = parseInt(document.getElementById("transdiv").style.height);
    TransDivW = parseInt(document.getElementById("transdiv").style.width);
    document.getElementById("transdiv").style.top = "50%";
    document.getElementById("transdiv").style.left = "50%";
    document.getElementById("transdiv").style.marginLeft = "-" + TransDivW / 2 + "px";
    document.getElementById("transdiv").style.marginTop = "-" + TrainHeight / 2 + "px";

}
function DoorVisible() {
    document.getElementById("train").style.visibility = "hidden";
    document.getElementById("transdiv").style.visibility = "visible";
}