const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

solution(+input[0], +input[1]);

function solution(A, B) {
  if (A > B) {
    console.log(">");
  }
  if (A < B) {
    console.log("<");
  }
  if (A === B) {
    console.log("==");
  }
}

// else if를 사용하지않고 구현하였습니다.
