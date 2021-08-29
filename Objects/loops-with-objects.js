const subjects = {
  JP: "Java Programming",
  PP: "Python Programming",
  JS: "Java Script",
  PHP: "PHP Programming",
  CPP: "C++ Programming",
  C: "C Programming",
  FLAT: "Formal Language and Automata Theory",
  DBMS: "Database Management System",
  WT: {
    JSP: "Java Server Pages",
    ASP: "Active Server Pages",
    Django: "Django Web Framework",
  },
};

// For in Loop to Iterate an Object
for (const subject in subjects) {
  // subject will fetch the key of an object
  if (typeof subjects[subject] !== "object") {
    console.log(`Key is: ${subject} and the value is: ${subjects[subject]}`);
  } else if (typeof subjects[subject] === "object") {
    for (const technology in subjects[subject]) {
      // technology will fetch the key of the internal Object
      console.log(
        `Key is: ${technology} and the value is: ${subjects[subject][technology]}`
      );
    }
  }
}
