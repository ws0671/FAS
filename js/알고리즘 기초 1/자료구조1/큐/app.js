// 10845
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  const queue = [];
  const answer = [];
  input = input.map((i) => i.replace("\r", ""));
  for (let x of input) {
    switch (x) {
      case "front":
        answer.push(queue[0] || -1);
        break;
      case "back":
        answer.push(queue[queue.length - 1] || -1);
        break;
      case "size":
        answer.push(queue.length);
        break;
      case "empty":
        answer.push(queue.length === 0 ? 1 : 0);
        break;
      case "pop":
        answer.push(queue.shift() || -1);
        break;
      default:
        queue.push(x.split(" ")[1]);
        break;
    }
  }
  console.log(answer.join("\n"));
}
