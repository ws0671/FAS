// 18870
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  const startInput = input[0].split(" ").map(Number);
  let set = new Set(startInput);
  let sortedSet = [...set].sort((a, b) => a - b);
  let obj = {};
  sortedSet.forEach((e, index) => (obj[e] = index));
  let answer = "";
  for (let i = 0; i < N; i++) {
    answer += obj[startInput[i]] + " ";
  }
  console.log(answer);
}
