// 1427
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");
solution(input);

function solution(input) {
  const sorted = input.sort((a, b) => b - a);
  console.log(sorted.join(""));
}
