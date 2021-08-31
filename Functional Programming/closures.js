function add1(value1) {
  console.log("Inside First Function");
  return function (value2) {
    // Value1 can be accesable here.
    console.log("Second Inner Function");
    value1 += 1;
    return function (value3) {
      //Value1 and Value2 can be accesable here.
      console.log("Thrid Inner Function");
      value2 += 1;
      return value1 + value2 + value3;
    };
  };
}

const result1 = add1(5);
const result2 = result1(6);
const result3 = result2(7);
console.log(result3);

console.log(add1(1)(2)(3));
