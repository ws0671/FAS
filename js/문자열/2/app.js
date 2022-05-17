// 11720
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const numbers = input[1].split("");
  let sum = 0;
  for (let number of numbers) {
    sum += +number;
  }
  console.log(sum);
}
