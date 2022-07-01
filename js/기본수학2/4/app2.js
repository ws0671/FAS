// 1929
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
solution(input);

function solution(input) {
  const [n, m] = input.map((i) => +i);
  const prime = { 1: true };
  const results = [];
  for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
    if (prime[i]) {
      continue;
    }
    for (let j = i ** 2; j <= m; j += i) {
      prime[j] = true;
    }
  }
  for (let i = n; i <= m; i++) {
    if (!prime[i]) {
      results.push(i);
    }
  }
  console.log(results.join("\n"));
}
