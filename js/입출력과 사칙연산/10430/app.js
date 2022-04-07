const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(+input[0], +input[1], +input[2]);

function solution(A, B, C) {
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}

//이 문제는 trim()을 쓰지않아도 정답이다. 정말 왜 이럴까?
