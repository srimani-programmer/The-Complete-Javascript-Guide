const stockValue = 97.7323;

// Converting the Float value to Integer Value
console.log(parseInt(stockValue));

// Calculating the Square root value
console.log(Math.sqrt(9));

// Generating the Floor and Ceil Values
console.log(Math.floor(stockValue));
console.log(Math.ceil(stockValue));

// Rounding the number
console.log(Math.round(stockValue));
const newStockValue = 121.2332;
console.log(Math.round(newStockValue));

// Generating the random number between min and max value
const minValue = 10000;
const maxValue = 1000000000;

const randomNumber = Math.floor(
  Math.random() * (maxValue - minValue) + minValue
);
console.log(randomNumber);
console.log(minValue <= randomNumber <= maxValue);
