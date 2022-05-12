// var counter = document.getElementsByClassName("counter")[0];
// var followers = document.getElementsByClassName("followers")[0];

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1);
