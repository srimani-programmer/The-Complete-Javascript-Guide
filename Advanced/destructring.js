// Array Destructuring
const persons = [
  "Jhon Doe",
  "Peter Williams",
  "Steve Smith",
  "Jhonson Mitchell",
  "Taylor Ross",
];

console.log(persons);

const [p1, p2, p3, p4, p5] = [
  "Jhon Doe",
  "Peter Williams",
  "Steve Smith",
  "Jhonson Mitchell",
  "Taylor Ross",
];

console.log(p1, p2, p3, p4, p5);

// Object Destructing

const Person = {
  name: "Taylor",
  age: 32,
  profession: "Software Developer",
  hobbies: ["Football", "cricket"],
};

console.log(Person);

// Left hand Side Object Data holding names must be same as the names that are used
// inside the object but the left hand side order is not preserved.
const { name, age, profession, hobbies } = Person;

console.log(
  `${name} is a ${profession} who loves to play ${hobbies[0]} and ${hobbies[1]} at the age of ${age}.`
);
