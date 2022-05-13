// 8958
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(num) {
  const T = num.shift();
  for (let i = 0; i < T; i++) {
    let sum = 0;
    let cnt = 0;

    for (let item of num[i]) {
      if (item === "O") {
        cnt++;
        sum += cnt;
      } else if (item === "X") {
        cnt = 0;
      }
    }
    console.log(sum);
  }
}

//array함수 map,forEach등은 문자열에 사용할 수 없다!
