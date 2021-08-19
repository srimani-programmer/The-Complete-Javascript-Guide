// Creating a function literal

const isEligibleToVote = function (age) {
  if (typeof age === "number") {
    if (age < 18) {
      return `Sorry! You're not eligible to vote`;
    } else if (age >= 18 && age <= 125) {
      return `Hurrah! You're eligible to vote.!`;
    } else if (age > 125) {
      return `Please verify your data with government records`;
    }
  } else {
    return `Please enter a valid input.`;
  }
};

console.log(isEligibleToVote(22));
