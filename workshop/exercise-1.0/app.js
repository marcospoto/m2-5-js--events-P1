// Exercise 1.0
// ------------

let body = document.getElementById("body");
let main = document.getElementById("main");

function addText() {
  let message = document.createElement("h1");
  main.appendChild(message);
  message.innerText = "Hello there!";
}

document.body.addEventListener("click", addText);
