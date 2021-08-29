const courses = [
  {
    courseName: "Java Programming",
    courseId: "JP53443",
  },
  {
    courseName: "C Programming",
    courseId: "C92399",
  },
  {
    courseName: "C++ Programming",
    courseId: "CPP93248",
  },
  {
    courseName: "Data Structures and Algorithms",
    courseId: "DSA973734",
  },
  {
    courseName: "Computer Networks",
    courseId: "CN976882",
  },
  {
    courseName: "Information Security",
    courseId: "IS732324",
  },
  {
    courseName: "Formal Language and Automata Theory",
    courseId: "FLAT023783",
  },
  {
    courseName: "Web Technologies",
    courseId: "WT9037513",
  },
  {
    courseName: "Data Warehousing and Data Mining",
    courseId: "DWDM17693",
  },
  {
    courseName: "Database Management System",
    courseId: "DBMS392332",
  },
  {
    courseName: "Object Oriented Analysis and Design Principles",
    courseId: "OOAD67943",
  },
];

// console.log(courses);

const fetchCourseName = (courseId) =>
  courses.find(
    (course) => course.courseId.toLowerCase() === courseId.toLowerCase()
  );

const course1 = fetchCourseName("DBMS392332");
console.log(course1.courseName);

const course2 = fetchCourseName("DSA973734");
console.log(course2.courseName);
