import people from './data.js';

function calculateAverageAge(peopleArray) {
    const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / peopleArray.length;
    return averageAge;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age of all people is: ${averageAge.toFixed(2)} years`); 