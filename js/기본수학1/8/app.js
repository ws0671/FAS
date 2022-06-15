// 10757
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

solution(input);

function solution(input) {
  const A = BigInt(input[0]);
  const B = BigInt(input[1]);
  const answer = A + B;
  console.log(answer.toString());
}
