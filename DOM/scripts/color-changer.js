const colors = [
  "red",
  "blue",
  "violet",
  "green",
  "orange",
  "yellow",
  "black",
  "#2aa5c6",
  "#a0f525",
  "#3094ad",
  "#65c1a0",
  "#5d04a4",
];
const button = document.getElementById("colorAction");
button.addEventListener("click", function () {
  const title = document.querySelector("h1");
  const index = Math.floor(Math.random() * colors.length) - 1;
  title.style.color = colors[index];
});
