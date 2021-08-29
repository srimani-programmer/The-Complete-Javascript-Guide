// this
// By default all regular function calls, this points to window Object
// regular function call --> Global Object i.e (Window in browser and an empty Object in node)

console.log(this);

const Employee = {
  name: "John Doe",
  age: 51,
  profession: "Software Developer",
  hobbies: ["Football", "Cricket"],
  getInformation: function () {
    console.log(this);

    function testFunction() {
      console.log(this);
    }

    testFunction();
  },
};

// This method call is not general function call so this keyword
Employee.getInformation();

const outsideFunction = function () {
  console.log(this);
};

outsideFunction();
