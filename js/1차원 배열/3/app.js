// 2577
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(num) {
  num = num.map((i) => +i);
  const [a, b, c] = num;
  const answer = [];
  const multiple = String(a * b * c);
  for (let i = 0; i < 10; i++) {
    let cnt = 0;
    for (let j = 0; j < multiple.length; j++) {
      if (multiple[j] === String(i)) cnt++;
    }
    answer.push(cnt);
  }
  answer.forEach((i) => console.log(i));
}
