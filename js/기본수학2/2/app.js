// 2581
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  const numbers = input.map((i) => +i);
  const num1 = numbers[0];
  const num2 = numbers[1];
  let sosu = [];
  for (let i = num1; i <= num2; i++) {
    let cnt = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) cnt++;
    }
    if (cnt === 1) sosu.push(i);
  }
  const minimum = sosu[0];
  if (sosu.length === 0) {
    console.log(-1);
  } else {
    const sosuSum = sosu.reduce((a, b) => a + b);
    console.log(sosuSum);
    console.log(minimum);
  }
}
