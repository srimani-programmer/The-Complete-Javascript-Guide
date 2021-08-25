class Person {
  constructor(name, age, dob, location, highestQualification, profession) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.location = location;
    this.highestQualification = highestQualification;
    this.profession = profession;
  }

  getPersonInformation() {
    return `Name: ${this.name}\nAge: ${this.age}\nDate Of Birth: ${this.dob}\nLocation: ${this.location}\nHighest Degree: ${this.highestQualification}\nProfession: ${this.profession}`;
  }
}

const p1 = new Person(
  "Jhon",
  28,
  "01/01/1993",
  "New York",
  "Masters in Computer Science",
  "Software Engineer"
);
// console.log(Object.hasOwnProperty("getPersonInformation"));
console.log(p1.getPersonInformation());

const p2 = new Person();
console.log(p2);
