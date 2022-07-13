// 11729
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);

function solution(N) {
  let count = 0;
  let answer = [];
  function Hanoi(num, from, other, to) {
    if (num === 0) {
      return;
    } else {
      // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 다른 곳으로 이동시킨다
      Hanoi(num - 1, from, to, other);
      // 맨 아래 원반을 목적지로 이동시킨다
      answer.push([from, to]);
      count++;
      // 다른 곳의 원반들을 목적지로 이동시킨다
      Hanoi(num - 1, other, from, to);
    }
  }
  Hanoi(N, "1", "2", "3");
  console.log(count);
  console.log(answer.map((i) => i.join(" ")).join("\n"));
}
