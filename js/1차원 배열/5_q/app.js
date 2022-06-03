// // 1546
// 나의 풀이
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// solution(input);

// function solution(input) {
//   const T = input.shift();
//   console.log(input);
//   const scores = input[0].split(" ").map((i) => +i);
//   const max = Math.max(...scores);
//   let sum = 0;
//   for (let score of scores) {
//     sum += (score / max) * 100;
//   }
//   console.log(sum / T);
// }
// 정답이 맞는 코드를 작성했는데 왜 틀렸다고 나올까?

// 1546
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const num = input[0] * 1;
  const score = input[1].split(" ");
  const max = Math.max(...score);
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += (score[i] / max) * 100;
  }
  console.log(sum / num);
}
