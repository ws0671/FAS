// 10808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");
solution(input);

function solution(input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const count = new Array(26).fill(0);

  input.forEach((i) => count[alphabet.indexOf(i)]++);
  console.log(count.join(" "));
}

//이렇게 카운트하는 문제는 0으로 초기화 해놔야한다.
//그래야 + 1씩 진행할 수 있다.
//undefined 에 1을 더하면 NaN로 나온다.
