// 2750
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
solution(input);

function solution(input) {
  const N = input.shift();
  const result = input.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    console.log(result[i]);
  }
}

// 답은 맞는데 문제가 통과되지않는다.
// 통과되는 코드가 따로 있긴하지만 나의 답과 차이점을
// 잘 모르겠다.

// 정렬 알고리즘으로 풀어보기
