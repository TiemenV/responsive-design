"use-strict";

document.addEventListener("DOMContentLoaded", init);
let queue = 0;

function init() {
    document.addEventListener("submit", start)
}

function start(e) {
    e.preventDefault();
    console.log(queue);
    if (queue < 1) {
        queue++;
        procedure();
    }
    else {
        queue++;
    }

}

function procedure() {
    console.log("procedure gets run");
    console.log(queue);
    setTimeout("carlight('Orange')", 1000);
    setTimeout("carlight('Red')", 2000);
    setTimeout("pedlight('Green')", 3000);
    setTimeout("pedlight('Red')", 4000);
    setTimeout("carlight('Green')", 5000);
    setTimeout("decrement()", 5000);


}

function carlight(colour) {
    document.querySelector("#carlight").innerHTML = colour;
}

function pedlight(colour) {
    document.querySelector("#pedlight").innerHTML = colour;
}

function decrement() {
    queue--;
    if (queue > 0) {
        procedure();
    }
}

