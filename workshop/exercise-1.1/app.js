// Exercise 1.1
// ------------

// Create variables with DOM items

let body = document.querySelector("body");
body.addEventListener("click", onClick);
let win = false;
let result = document.getElementById("result");

function onClick() {
  win = true;
  result.innerText = "You Win!";
  body.removeEventListener("click", onClick);
}

setTimeout(function () {
  if (!win) {
    body.removeEventListener("click", onClick);
    result.innerText = "You Lose";
  }
}, 2000);
