// 10871
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(number) {
  const num1 = number[0].split(" ").map((i) => +i);
  const num2 = number[1].split(" ").map((i) => +i);
  const X = num1[1];
  const answer = num2.filter((i) => i < X);
  console.log(...answer);
}
