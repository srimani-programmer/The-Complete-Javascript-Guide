class Animal {
  constructor(animalType, animalExistence, animalName) {
    this.animalType = animalType;
    this.animalExistence = animalExistence;
    this.animalName = animalName;
  }

  getAnimalInformation() {
    return `Animal Type: ${this.animalType} and Animal Existence: ${this.animalExistence} and Animal Name: ${this.animalName}`;
  }
}

class Dog extends Animal {
  constructor(
    animalType,
    animalExistence,
    animalName,
    animalWeight,
    animalSize,
    isDangerous
  ) {
    super(animalType, animalExistence, animalName);
    this.animalWeight = animalWeight;
    this.animalSize = animalSize;
    this.isDangerous = isDangerous;
  }

  getAnimalInformation() {
    return `Animal Type: ${this.animalType}\nAnimal Existence: ${this.animalExistence}\nAnimal Name: ${this.animalName}\nAnimal Weight: ${this.animalWeight}`;
  }
}

const a1 = new Animal("Carnivorous", "Yes", "Lion");
console.log(a1.getAnimalInformation());

const d1 = new Dog("Omnivoroues", "Yes", "Dog", 15, "No");
console.log(d1.getAnimalInformation());
