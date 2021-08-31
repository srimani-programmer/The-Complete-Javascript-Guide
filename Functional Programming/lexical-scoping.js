function outerFunction() {
  // firstname and lastname can be accessed in entire function scope
  // and the inner blocks in that function can also access it.
  let firstName = "Jhon";
  let lastName = "Doe";

  function innerFunction() {
    console.log(`${firstName} ${lastName}`);
  }

  innerFunction();
}

outerFunction();
