// 4948
const fs = require("fs");
const { isPrimitive } = require("util");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    if (+input[i] === 0) break;
    const n = +input[i];
    let cnt = 0;
    for (let j = n + 1; j <= 2 * n; j++) {
      if (isPrime(j)) {
        cnt++;
      }
    }
    answer += `${cnt}\n`;
  }
  console.log(answer.slice(0, -1));
  //0부터 end가 -1이니까 마지막을 제외(\n를 제외)
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//안보고 푸는 연습하기
