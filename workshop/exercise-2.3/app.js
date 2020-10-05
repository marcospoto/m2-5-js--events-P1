main = document.getElementById("main");

for (i = 0; i < 20; i++) {
  let button = document.createElement("button");
  button.innerText = i + 1;
  button.style.backgroundColor = "red";
  button.style.position = "absolute";
  button.style.right = `${Math.random() * 90}vw`;
  button.style.top = `${Math.random() * 90}vh`;

  main.appendChild(button);

  button.addEventListener("click", (event) => {
    if (button.style.backgroundColor === "red") {
      event.target.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  });
}
