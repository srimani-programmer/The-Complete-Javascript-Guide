function calculateGrade(marksObtained, totalMarks) {
  if (typeof marksObtained === "number" && typeof totalMarks === "number") {
    if (marksObtained > totalMarks) {
      return `Please enter a valid input`;
    } else {
      const percentage = (marksObtained / totalMarks) * 100;
      if (percentage >= 90) {
        return `Grade - A`;
      } else if (percentage >= 80 && percentage < 90) {
        return `Grade - B`;
      } else if (percentage >= 70 && percentage < 80) {
        return `Grade - C`;
      } else if (percentage >= 60 && percentage < 70) {
        return `Grade - D`;
      } else if (percentage >= 50 && percentage < 60) {
        return `Grade - E`;
      } else if (percentage < 50) {
        return `Grade - F`;
      }
    }
  } else {
    return `Please enter a valid input`;
  }
}

console.log(calculateGrade(581, 600));
