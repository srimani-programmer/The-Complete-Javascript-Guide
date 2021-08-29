const randomNames = [
  "Facebook",
  "Google",
  "Instagram",
  "Youtube",
  "Airbnb",
  "Netflix",
  "Amazon",
  "Microsoft",
  "Samsung",
  "OnePlus",
  "Asus",
  "Acer",
  "Apple",
];

// Traditional for loop to iterate an array
console.log("******************Traditional For Loop******************");
for (let index = 0; index < randomNames.length; index++) {
  console.log(randomNames[index]);
}

// for of loop to iterate an array
console.log("******************For Of loop******************");
for (const random of randomNames) {
  console.log(random);
}

// for in loop to iterate an array
console.log("******************For In loop******************");
for (const index in randomNames) {
  console.log(
    `Index Value is: ${index} and the value is: ${randomNames[index]}`
  );
}

// for each method to iterate an array
console.log("******************For Each loop******************");
randomNames.forEach((element, index) => {
  console.log(`Index Value is: ${index} and the value is: ${element}`);
});
