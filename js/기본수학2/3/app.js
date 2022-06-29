// 11653
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);

function solution(input) {
  let number = input;
  let i = 2;
  while (number !== 1) {
    if (number % i === 0) {
      number = number / i; // 나누어떨어지면 타겟 넘버를 몫으로 바꿔준다
      console.log(i);
    } else {
      i += 1;
    }
  }
}
// 굳이 소수를 구해서 소수로만 나누는게 아니라
// 2부터 나눠주고 더 이상 안나눠지면 1씩 증가시키는 식으로
// 풀어주면 된다. 이렇게하면 자연스럽게 소수가 아닌수는 걸러지는 것 같다.
// 채점이 너무 느려서 좋은 풀이는 아닌 듯?
