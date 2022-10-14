// 1934
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  input = input.map((i) => i.replace("\r", ""));
  const n = input.shift();
  input = input.map((i) => i.split(" ").map((i) => +i));
  for (let i = 0; i < n; i++) {
    let max = Math.max(...input[i]);
    let min = Math.min(...input[i]);
    let a = max;
    let b = min;
    let r = 0;
    while (b !== 0) {
      r = a % b;
      a = b;
      b = r;
    }
    console.log((max * min) / a);
  }
}
