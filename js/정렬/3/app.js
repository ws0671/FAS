// 10989
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  input.shift();
  const sorted = input.sort((a, b) => a - b);
  console.log(sorted.join("\n"));
}

// 백준의 채첨 현황을 확인해본 결과
// 자바스크립트로는 아무도 통과하지 못했다.
// 왜 정답 처리가 안되는지 모르겠다.
