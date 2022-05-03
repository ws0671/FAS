// 2439
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  const T = +input;
  for (let i = 1; i <= T; i++) {
    console.log(" ".repeat(T - i) + "*".repeat(i));
  }
}
