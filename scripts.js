// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

console.log("----------Practice MAP, FILTER, REDUCE--------------------");

const calcAverageHumanAge = (ages) =>
  // all of three array methods here connected together using . and are considered as ONE statement, that's why we need nor CURLY BRACES neither RETRUN!

  // NOTE: WE USE Math.floor() here, because the age 47.33 years old doesn't make any sense and floor() will convert it to the 47 years old!
  Math.floor(
    ages
      .map((age, i, allAges) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((acc, cur, i, allAges) => acc + cur / allAges.length, 0)
  );

const AverageAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(AverageAge1); // 44

const AverageAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(AverageAge2); // 47
