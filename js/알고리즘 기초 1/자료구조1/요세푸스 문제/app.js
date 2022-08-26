// 1158
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const [N, K] = input[0].split(" ");
  const queue = [];
  const answer = [];
  for (let i = 1; i <= N; i++) queue.push(i);
  let count = 1;
  while (queue.length) {
    const shiftItem = queue.shift();
    if (count % K === 0) {
      answer.push(shiftItem);
    } else {
      queue.push(shiftItem);
    }
    count++;
  }
  console.log(`<${answer.join(", ")}>`);
}

//count가 k이면 자연스럽게 k번째 숫자가 추출된다.
