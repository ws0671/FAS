// 2742
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const T = input.shift();
  let answer = "";
  for (let i = T; i > 0; i--) {
    answer += i + "\n";
  }
  console.log(answer);
}

// 문자열에 누적시켜서 답을 출력할때만 시간초과가 나오지 않는다.
