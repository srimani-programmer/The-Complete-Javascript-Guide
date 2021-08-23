const Student = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

// console.log(typeof Student); -> Function
// console.log(Student());

const s1 = new Student("Peter", "Jhon", 27);
console.log(typeof Student); // Function type
console.log(typeof s1); // Object type
console.log(s1);
console.log(s1.firstName);

const s2 = new Student("Sri Manikanta", "Palakollu", 22);
console.log(s2);
