// JavaScript source code
document.getElementById("train").addEventListener("wheel", ScrollGetSetTrain);
function ScrollGetSetTrain(event) {
    //alert("on");

    var e = window.event || e;
    const delta = Math.sign(e.deltaY);
    if (delta == 1) {
        window.scrollBy(100, 0);
    }
    else if (delta == -1) {
        window.scrollBy(-100, 0);
    }
    console.log(delta);
}