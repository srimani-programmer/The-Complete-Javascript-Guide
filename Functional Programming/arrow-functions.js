const isEligibleToVote = (age) => {
  if (!isNaN(age)) {
    age = parseInt(age);
    if (age < 18) {
      return "You are not Eligible to vote.";
    } else if (age >= 18 && age <= 125) {
      return "You are Eligible to vote.";
    } else if (age > 125) {
      return `Please verify your age with Govt Records.`;
    }
  } else {
    return "Please enter a valid age.";
  }
};

console.log(isEligibleToVote("21"));
