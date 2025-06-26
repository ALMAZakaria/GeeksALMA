// Exercise 1: Checking the BMI

// Create two objects with person details
const person1 = {
  fullName: "Alice Smith",
  mass: 68, // kg
  height: 1.65, // meters
  calculateBMI: function() {
      return this.mass / (this.height * this.height);
  }
};

const person2 = {
  fullName: "Bob Johnson",
  mass: 85, // kg
  height: 1.80, // meters
  calculateBMI: function() {
      return this.mass / (this.height * this.height);
  }
};

// Function to compare BMI values
function compareBMI(personA, personB) {
  const bmiA = personA.calculateBMI();
  const bmiB = personB.calculateBMI();

  if (bmiA > bmiB) {
      console.log(`${personA.fullName} has the higher BMI.`);
  } else if (bmiB > bmiA) {
      console.log(`${personB.fullName} has the higher BMI.`);
  } else {
      console.log(`Both ${personA.fullName} and ${personB.fullName} have the same BMI.`);
  }
}

// Call the function
compareBMI(person1, person2);



// Exercise 2: Grade Average

// Function to calculate average
function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
  }
  return sum / gradesList.length;
}

// Function to determine pass or fail
function findAvg(gradesList) {
  const average = calculateAverage(gradesList);
  console.log(`The average grade is: ${average}`);

  if (average > 65) {
      console.log("Congratulations! You passed.");
  } else {
      console.log("Unfortunately, you failed and must repeat the course.");
  }
}

// Example usage
const studentGrades = [78, 85, 90, 60, 50];
findAvg(studentGrades);