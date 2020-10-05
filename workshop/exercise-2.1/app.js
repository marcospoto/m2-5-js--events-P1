let main = document.getElementById("main");

for (i = 0; i < 20; i++) {
  let button = document.createElement("button");
  button.innerText = i + 1;
  main.appendChild(button);
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "green";
  });
}
