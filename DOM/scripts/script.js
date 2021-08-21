// To get a particular element
const h1 = document.querySelector("h1");
h1.textContent = "This is Cool text....!";

// To get all elements and perform manipulation
const h1s = document.querySelectorAll("h1");
h1s.forEach((element) => {
  element.textContent = "Sample Paragraph";
  element.innerHTML = "Cool";
  element.innerText = "Super Cool";
});
