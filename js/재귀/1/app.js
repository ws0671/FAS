// 10872
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(input);

function solution(input) {
  input = +input;
  let result = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }
  console.log(result);
}
