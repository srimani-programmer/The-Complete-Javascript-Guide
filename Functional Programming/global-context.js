// Javascript Hoisting:
// 1. All Functions are scanned and readily available to use before the program execution.
// 2. All variables are declared will also be scanned and declared as undefined.

greetings(); // This function call will get executed because of global execution context.

function greetings() {
  console.log("Welcome to JS.!");
}

// greet1(); --> This function call will throw an error because our greet1 function is a function literal.

var greet1 = function () {
  console.log("Greetings from Greet1 Function");
};

greet1();
