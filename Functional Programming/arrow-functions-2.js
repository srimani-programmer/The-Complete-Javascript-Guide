const specialFunction = () => {
  // console.log(arguments); -> No longer Bound to the function
};

specialFunction();

const Employee = {
  name: "Peter",
  age: 27,
  profession: "Software Developer",
  hobbies: ["Chess", "Football", "Cricket"],
  getDetails: () => {
    return `${this.name} is a ${this.profession} and has following hobbies: ${this.hobbies}`;
  }, // the above arrow function will return the values as undefined because this keyword is not bounded to the current context.

  getDetails2: function () {
    return `${this.name} is a ${this.profession} and has following hobbies: ${this.hobbies}`;
  },
};

console.log(Employee.getDetails());
console.log(Employee.getDetails2());
