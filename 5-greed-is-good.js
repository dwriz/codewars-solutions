/*
https://www.codewars.com/kata/5270d0d18625160ada0000e4/
*/

function score(dice) {
  let score = 0;

  let counts = {};

  dice.forEach((die) => {
    if (counts[die]) {
      counts[die]++;
    } else {
      counts[die] = 1;
    }
  });

  for (let die in counts) {
    if (counts[die] >= 3) {
      if (die === "1") {
        score += 1000;
      } else {
        score += die * 100;
      }
      counts[die] -= 3;
    }

    if (die === "1") {
      score += counts[die] * 100;
    } else if (die === "5") {
      score += counts[die] * 50;
    }
  }
  return score;
}
