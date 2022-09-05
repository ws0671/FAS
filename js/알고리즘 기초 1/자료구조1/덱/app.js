// 10866
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  input = input.map((i) => i.replace(/\r/, ""));
  const deque = [];
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i].split(" ")[0]) {
      case "push_back":
        deque.push(input[i].split(" ")[1]);
        break;
      case "push_front":
        deque.unshift(input[i].split(" ")[1]);
        break;
      case "front":
        answer.push(deque[0] || -1);
        break;
      case "back":
        answer.push(deque[deque.length - 1] || -1);
        break;
      case "pop_front":
        answer.push(deque.shift() || -1);
        break;
      case "pop_back":
        answer.push(deque.pop() || -1);
        break;
      case "size":
        answer.push(deque.length);
        break;
      case "empty":
        answer.push(deque[0] ? 0 : 1);
        break;
    }
  }
  console.log(answer.map(Number).join("\n"));
}
