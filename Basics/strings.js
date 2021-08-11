// Strings

let employeeName = "Sri Manikanta Palakollu"; //string literal

console.log("Employee Name: " + employeeName);

// To get the length of the string
console.log("Length of the name: " + employeeName.length);

// to get the character based on index

console.log(employeeName[9]);
console.log(employeeName.charAt(2));
console.log(employeeName.charCodeAt(0)); // Get the unicode value of that character based on index
// console.log(employeeName.charAt(-4));  --> Provides the blank o/p
console.log(employeeName[-1]); // we get result as undefined.

// Slice Operator
console.log(employeeName.slice(0, 8));
console.log(employeeName.slice(-12, -8));
console.log(employeeName.slice(0));

// substring
console.log(employeeName.substring(0, 8)); // Doesn't accept any negative values.

// substr
console.log(employeeName.substr(0, 15)); // Same as slice but 2nd param is length of the string that we want to extract

// To make string upper case
console.log(employeeName.toUpperCase());

// To make string lower case
console.log(employeeName.toLowerCase());

// replacing the values

console.log(employeeName.replace(" ", ""));

// Spliting the String
let splittedString = employeeName.split(" ");
console.log(splittedString);
console.log(typeof splittedString);

// Trimming the data
let data =
  "           Raw data (sometimes called source data, atomic data or primary data) is data that has not been processed for use. A distinction is sometimes made between data and information to the effect that information is the end product of data processing. Raw data that has undergone processing is sometimes referred to as cooked data.             ";

console.log("Untrimmed Data:\n" + data);
console.log("Trimmed Data:\n" + data.trim());

// To get the index value
console.log(employeeName.indexOf("Man"));
