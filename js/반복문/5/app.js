// 2741
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);
function solution(input) {
  const T = input.shift();
  let answer = "";
  for (let i = 0; i < T; i++) {
    answer += i + 1 + "\n";
  }
  console.log(answer);
}

// 일반적으로 접근하면 오답처리되고 answer 문자열에 누적시키는
// 방법으로 풀어야 통과가되었다.
