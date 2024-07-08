/*
https://www.codewars.com/kata/5659c6d896bc135c4c00021e/
*/

function nextSmaller(n) {
  let digits = n.toString().split("");

  let i = digits.length - 2;

  while (i >= 0 && digits[i] <= digits[i + 1]) {
    i--;
  }

  if (i < 0) return -1;

  let j = digits.length - 1;

  while (digits[j] >= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let left = digits.slice(0, i + 1);

  let right = digits.slice(i + 1).reverse();

  let result = left.concat(right).join("");

  if (result[0] === "0") return -1;

  return parseInt(result, 10);
}
