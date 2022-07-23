// 1436
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);

function solution(input) {
  let num = "665";
  while (input > 0) {
    num++;
    if (num.toString().includes("666")) {
      input--;
    }
  }
  console.log(num);
}

// 숫자를 665에서부터 1씩 증가시킨다
// 그러다가 666을 포함하면 input을 1 감소시킨다
// input이 0이 되면 num을 출력한다.
