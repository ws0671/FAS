// 10950
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = input.shift();
solution(+T, input);

function solution(T, input) {
  for (let i = 0; i < T; i++) {
    const [a, b] = input[i].split(" ");
    console.log(+a + +b);
  }
}
