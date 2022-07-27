// 2751
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
solution(input);

function solution(input) {
  input.shift();
  let sorted = input.sort((a, b) => a - b);
  console.log(sorted.join("\n"));
}

// 문자열의 맨앞과 맨뒤의 여백을 지워주는 trim()을 사용하니까 정답처리되었다.
