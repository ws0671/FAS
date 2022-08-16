// 18870
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const n = +input.shift();
  const startInput = input[0].split(" ").map(Number);
  const set = new Set(startInput);
  const sortedSet = [...set].sort((a, b) => a - b);
  let obj = {};
  let answer = "";
  sortedSet.forEach((e, index) => (obj[e] = index));
  for (let i = 0; i < n; i++) {
    answer += obj[startInput[i]] + " ";
  }
  console.log(answer);
}
// 중복값을 없애고 정렬을 해주면
// 각 값의 index가 곧 그 값보다 작은 수의 개수를 의미한다.
// 이러한 아이디어가 있다는 것이 놀라웠다.
