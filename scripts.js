// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

console.log("----------Practice MAP, FILTER, REDUCE--------------------");

const calcAverageHumanAge = (ages) => {
  let sumAge = 0;

  // USING MAP()
  const humanAges = ages
    .map((age, i, allAges) => (age <= 2 ? 2 * age : 16 + age * 4))

    // USING FILTER()
    // .filter((age) => !(age < 18)) OR THE FOLLOWING:
    .filter((age) => age >= 18)

    // USING REDUCE()
    .reduce(
      // FIRST METHOD TO GET THE AVERAGE:  [3,2] => avg => (3+2) / 2 = 2.5 is below!
      // SECOND METHOD TO GET THE AVERAGE: [3,2] => avg => (3/2 + 2/2) = 1.5 + 1 = 2.5(cur / allAges.length)
      (acc, cur, i, allAges) => acc + cur / allAges.length,
      0
    );

  // OR USING forEach:
  // humanAges.forEach((age) => {
  //   sumAge += age;
  // });

  // NOTE: IF WE DON'T WANT TO USE cur / allAges.length ABOVE, WE CAN USE THE FOLLOWING STATEMENTS:
  // return (sumAge / agesArray.length).toFixed(2);

  // for the age, it would be better to do the Math.floor()!
  // return Math.floor(sum / adults.length);
  return Math.floor(humanAges); // 44   // 47
};
const AverageAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(AverageAge1); // [36, 4, 32, 2, 76, 48, 28]

const AverageAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(AverageAge2); // [80, 40, 56, 36, 40, 2, 32]
