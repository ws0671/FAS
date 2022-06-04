// 2839
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(input) {
  let count = 0;
  while (true) {
    if (input % 5 === 0) {
      console.log(input / 5 + count);
      break; // 첨에 바로 나누어 떨어지면 while문을 나온다.
    }
    if (0 > input) {
      //while문 반복시 input이 0보다 작아지면 -1을 반환
      console.log(-1);
      break;
    }
    count++;
    input -= 3;
  }
}

//이런 수식을 생각해내는게 어려운 것 같다.
