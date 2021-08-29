const names = [
  "Peter Williams",
  "Jhon Doe",
  "Matthew",
  "Henry James",
  "Mark",
  "Stefen",
  "Daniel",
  "Joseph",
  "Henry",
  "Samuel",
  "Mary",
  "Elena",
];

// prints the length of an array
console.log(names.length);

// Adding element to an array
names.push("Jersey");
console.log(names);

// Removing the last element form an Array
names.pop();
console.log(names);

// Removing the particular element from an array
// splice(IndexValue, DeleteCount) -> Splice is also used to modify the array.
// splice(IndexValue, DeleteCount, n1, n2, n3, ...) here n1, n2, n3 are the elements that we want to add to an array
names.splice(names.indexOf("Elena"), 1);
console.log(names);
console.log(names.length);

names.splice(names.indexOf("Henry James"), 0, "Jack", "Noah", "Thomas");
console.log(names);
console.log(names.length);

// Checking for a particular element is present in an array or not
console.log(names.includes("Noah"));

// Filtering the Array Content
const longNames = names.filter((name) => name.length > 10);
console.log("Long Names List: ", longNames);

// Fetching the Short names
const smallNames = names.filter((name) => name.length < 6);
console.log("Small Names List: ", smallNames);

// Sorting an Array
console.log(names.sort());

// Reverse the array
console.log(names.reverse());

// Map method in array
const namesCapitalCase = names.map((name) => name.toUpperCase());
console.log(namesCapitalCase);

const namesLowerCase = names.map((name) => name.toLowerCase());
console.log(namesLowerCase);
