// 1110

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);
function solution(n) {
  let cnt = 0;
  let num = n;
  let resultNum = 0;
  while (true) {
    cnt++;
    resultNum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (resultNum % 10);
    if (num === n) break;
  }
  console.log(cnt);
}
