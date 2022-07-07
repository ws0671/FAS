const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(n) {
  function fibo(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fibo(n - 1) + fibo(n - 2);
  }
  console.log(fibo(n));
}
