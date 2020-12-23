// JavaScript source code
window.onLoad = function () {
    var posx;
    var posx1;
    var returnn;
    var mydiv = document.getElementById("train");
    mydiv.addEventListener("touchstart", function (e) {
        e = e || window.event;
        //console.log(e);
        posx = e.changedTouches[0].pageX;
        //console.log(posy);
    })
    mydiv.addEventListener("touchend", function (e) {
        e = e || window.event;
        //console.log(e);
        posx1 = e.changedTouches[0].pageX;
        //console.log(posy);
        returnn = posx1 - posx;
        console.log(returnn);
        if (returnn > 10) {
            console.log(10);
        }
        else if (returnn < -10) {
            console.log(-10);
        }
    })
}