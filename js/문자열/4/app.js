// 2675
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const T = +input.shift();
  for (let i = 0; i < T; i++) {
    const testCase = input[i].split(" ");
    const R = testCase[0];
    let sum = "";
    for (let j = 0; j < testCase[1].length; j++) {
      const num = testCase[1][j];
      sum += num.repeat(R);
    }
    console.log(sum);
  }
}
