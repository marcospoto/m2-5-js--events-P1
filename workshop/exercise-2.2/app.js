let main = document.getElementById("main");

for (i = 0; i < 20; i++) {
  let button = document.createElement("button");
  button.innerText = i + 1;
  button.style.backgroundColor = "red";
  main.appendChild(button);
  button.addEventListener("click", (event) => {
    if (event.target.style.backgroundColor === "red") {
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
    }
  });
}
