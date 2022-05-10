//10951
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let cnt = 0;
solution(input);
function solution(n) {
  while (cnt < input.length - 1) {
    const numbers = n[cnt].split(" ");
    console.log(+numbers[0] + +numbers[1]);
    cnt++;
  }
}
