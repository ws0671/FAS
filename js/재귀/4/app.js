// 2447
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);

function solution(num) {
  const lines = [];

  printStars(num);
  console.log(lines.join(""));

  function printStars(num) {
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        star(i, j, num);
      }
      lines.push("\n");
    }
  }

  function star(i, j, num) {
    if (i % 3 == 1 && j % 3 == 1) {
      //좌표를 3으로 나눴을때 1이면 공백이다.
      lines.push(" ");
    } else {
      if (num === 1) {
        lines.push("*");
      } else {
        star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
      }
    }
  }
}

// 완전히 이해가 가지 않는다.
