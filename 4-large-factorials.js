/*
https://www.codewars.com/kata/557f6437bf8dcdd135000010/
*/

function factorial(n) {
  if (n < 0) return null;

  if (n === 0 || n === 1) return "1";

  let result = [1];

  for (let i = 2; i <= n; i++) {
    let carry = 0;

    for (let j = 0; j < result.length; j++) {
      let product = result[j] * i + carry;

      result[j] = product % 10;

      carry = Math.floor(product / 10);
    }

    while (carry > 0) {
      result.push(carry % 10);

      carry = Math.floor(carry / 10);
    }
  }

  return result.reverse().join("");
}
