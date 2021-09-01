const addNumbers = function (...numbers) {
  // ...numbers act like a REST Operator
  let sum = 0;

  for (const value of numbers) {
    sum += value;
  }

  console.log(sum);
};

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

const add = function (a, b) {
  return a + b;
};

console.log(add(...[1, 2])); // Here the Operator is acting as a Spread Operator.
