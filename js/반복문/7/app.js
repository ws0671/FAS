// 11021
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const T = input.shift();
  for (let i = 0; i < T; i++) {
    const [a, b] = input[i].split(" ");
    console.log(`Case #${i + 1}: ${+a + +b}`);
  }
}
