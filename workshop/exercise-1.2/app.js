// Exercise 1.2
// ------------
console.log("exercise 1.2");

let body = document.querySelector("body");
let result = document.getElementById("result");
let timeValue = document.getElementById("time");

body.addEventListener("click", onClick);
let win = false;

console.log(result);

let time = Math.floor(Math.random() * 5 + 1);
timeValue.innerText = time;

function onClick() {
  win = true;
  result.innerText = "You Win!";
  body.removeEventListener("click", onClick);
}

setTimeout(function () {
  if (win != true) {
    result.innerText = "You Lose";
    body.removeEventListener("click", onClick);
  }
}, time * 1000);

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (5000 - 1000 + 1000) + 1000);
// }
