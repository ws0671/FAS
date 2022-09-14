// 17299
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const N = +input.shift();
  let splited = input[0].split(" ");
  let arr = [];
  let stack = [];
  let count = {};

  for (let x of splited) {
    if (!count[x]) count[x] = 1;
    else count[x]++;
  }
  for (let i = 0; i < N; i++) {
    while (
      stack.length &&
      count[splited[i]] > count[splited[stack[stack.length - 1]]]
    )
      arr[stack.pop()] = splited[i];
    stack.push(i);
  }

  while (stack.length) arr[stack.pop()] = -1;

  console.log(arr.join(" ").trim());
}
