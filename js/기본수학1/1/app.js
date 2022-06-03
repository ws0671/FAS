// 1712
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
// 노트북 판매 가격 C에서 가변비용 B를 뺀 값을 고정 비용에서 나누면
// 손익분기점이 나온다.
// 가변비용 B가 노트북 가격 C보다 크면 아무리 팔아도 적자이다.
solution(input);

function solution(num) {
  const [A, B, C] = [+num[0], +num[1], +num[2]];
  let answer = Math.floor(A / (C - B)) + 1;
  //이익이 발생해야하므로 +1을 해준다
  B >= C ? console.log(-1) : console.log(answer);
}
