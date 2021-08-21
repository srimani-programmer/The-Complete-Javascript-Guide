const vegetables = document.getElementsByClassName("veg-section");
// console.log(vegetables);

for (let index = 0; index < vegetables.length; index++) {
  vegetables[index].textContent =
    vegetables[index].textContent +
    ` --> It has a length of ${vegetables[index].textContent.length}`;
}

const fruits = document.getElementsByClassName("fruits-section");
for (let index = 0; index < fruits.length; index++) {
  fruits[
    index
  ].textContent += ` | ${fruits[index].textContent} has a length of ${fruits[index].textContent.length}`;
}

const cars = document.getElementsByClassName("cars-section");
for (let index = 0; index < cars.length; index++) {
  cars[index].textContent =
    cars[index].textContent + ` is available for purchase.`;
}
