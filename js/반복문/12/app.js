// 10952
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  let cnt = 0;
  while (true) {
    const [a, b] = input[cnt].split(" ").map((i) => +i);
    if (a === 0 && b === 0) {
      break;
    }
    console.log(a + b);
    cnt += 1;
  }
}
