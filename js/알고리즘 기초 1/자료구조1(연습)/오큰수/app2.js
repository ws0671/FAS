// 17298
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const N = Number(input.shift());
  const arr = input[0].split(" ").map(Number);
  const answer = new Array(N).fill(-1);
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      answer[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  console.log(answer.join(" "));
}
