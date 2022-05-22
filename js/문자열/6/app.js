// 1152
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  const str = input.trim().split(" ");
  console.log(str[0] === "" ? 0 : str.length);
}
