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
    for (let j = n + 1; j <= n * 2; j++) {
      if (isPrime(j)) cnt++;
    }
    answer += `${cnt}\n`;
  }
  console.log(answer.slice(0, -1));
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// 소수: 약수를 1과 자기자신만 갖는 1보다 큰 자연수
