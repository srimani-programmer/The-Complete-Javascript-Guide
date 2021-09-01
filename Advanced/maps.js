// Creation of Maps
const personMap = new Map();

// Adding elements to the map
personMap.set("name", "Taylor");
personMap.set("age", 32);
personMap.set("profession", "software developer");
personMap.set("hobbies", ["Football", "Cricket"]);

// Fetch values from Map using keys
console.log("Name: " + personMap.get("name"));
console.log("Hobbies: " + personMap.get("hobbies"));

// Iterating the map using the classical for loop

// 1. Fetching Keys from Map
console.log(
  "************************ ITERATING KEYS FROM LOOP ************************"
);
for (const key of personMap.keys()) {
  console.log(`Key is: ${key}`);
}

// 2. Fetching Values from Map
console.log(
  "************************ ITERATING VALUES FROM LOOP ************************"
);
for (const value of personMap.values()) {
  console.log(`Value is: ${value}`);
}

// 3. Fetching both keys and values
console.log(
  "************************ ITERATING BOTH KEYS AND VALUES FROM LOOP ************************"
);
for (const [key, value] of personMap) {
  console.log(`Key is: ${key} and value is: ${value}`);
}

// For Each Loop to fetch the content from map
console.log("************************ FOR EACH LOOP ************************");
personMap.forEach((value, key) => {
  console.log(`Key is: ${key} and the value is: ${value}`);
});

// Delete an element from map
personMap.delete("age");

console.log(personMap);

// Clearing the entire map
personMap.clear();

console.log(personMap);
