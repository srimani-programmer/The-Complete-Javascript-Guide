let count = 0;
document.addEventListener("DOMContentLoaded", function () {
  const counter = document.querySelector("#count");

  document.querySelector("#counter").addEventListener("click", function () {
    count++;
    counter.textContent = count;
  });
});
