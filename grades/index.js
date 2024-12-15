require("../codehs");

function start() {
  // get number of grades
  const NUMgrades = readInt("How many grades would you like to store? ");

  // ask user for grades until number above is met
  let grades = [];
  for (let i = 0; i < NUMgrades; i++) {
    const grade = readInt(`Enter grade [${i}]: `);

    // allow user to cancel
    if (grade == null) return;
    grades.push(grade);
  }

  const average = averageGrade(grades);
  println("       Average grade: " + average);
  println("       Highest grade: " + highestGrade(grades));
  println("        Lowest grade: " + lowestGrade(grades));
  println("Grades above average: " + gradesAboveAverage(grades, average));
  println("Grades below average: " + gradesBelowAverage(grades, average));
}

// average of the given grades
function averageGrade(grades) {
  let total = 0;
  for (let j = 0; j < grades.length; j++) {
    total = total + grades[j];
  }
  return total / grades.length;
}

function highestGrade(grades) {
  let max = 0;
  for (let j = 0; j < grades.length; j++) {
    if (grades[j] > max) max = grades[j];
  }
  return max;
}

function lowestGrade(grades) {
  let min = 100;
  for (let j = 0; j < grades.length; j++) {
    if (grades[j] < min) min = grades[j];
  }
  return min;
}

function gradesAboveAverage(grades, average) {
  let count = 0;
  for (let j = 0; j < grades.length; j++) {
    if (grades[j] > average) count++;
  }
  return count;
}

function gradesBelowAverage(grades, average) {
  let count = 0;
  for (let j = 0; j < grades.length; j++) {
    if (grades[j] < average) count++;
  }
  return count;
}

start();
