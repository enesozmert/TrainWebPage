//ba�lang�ca at�lan function tan�m�
oldOnLoad = window.onload
window.onload = onLoad;
var w = window.innerWidth; //pencere geni�li�i
var h = window.innerHeight; //pencere y�ksekli�i
//event ba�lang��
function onLoad() {
    Position();
}
function Position() { //metot i�lem yaz�yon
    var TrainHeight = document.getElementById("train").style.height;
    var TrainWidth = document.getElementById("train").style.width;
    document.getElementById("train").style.width = (w * 3) + "px";
    document.getElementById("train").style.height = (h / 3) + "px";
    document.getElementById("train").style.top = "50%";
    document.getElementById("train").style.left = "50%";
    document.getElementById("train").style.marginLeft = -(TrainWidth / 2) + "px";
    document.getElementById("train").style.marginTop = -(TrainHeight / 2) + "px";
}