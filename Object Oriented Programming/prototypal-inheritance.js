const Car = function (name, wheels, dateOfManfacturing, cost) {
  this.name = name;
  this.wheels = wheels;
  this.dateOfManfacturing = dateOfManfacturing;
  this.cost = cost;
};

function getInformation() {
  return `${this.name} has ${this.wheels} wheels which is manufactured in ${this.dateOfManfacturing}`;
}

function getCostInformation() {
  return `It has a cost of ${this.cost}INR ONLY`;
}

Car.prototype.getInformation = getInformation;

Car.prototype.getCostInformation = getCostInformation;

const c1 = new Car("BMW", 4, 2019, 5500000);
console.log(c1);
console.log(c1.getInformation());
console.log(c1.getCostInformation());
