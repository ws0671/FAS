// 4344
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(num) {
  const T = num.shift();
  for (let i = 0; i < T; i++) {
    let sum = 0;
    const str = num[i];
    const lst = str.split(" ").map((i) => +i);
    const N = lst.shift();
    for (let item of lst) {
      sum += item;
    }
    const average = sum / N;
    const lstFilter = lst.filter((i) => i > average);
    const result = lstFilter.length / N;
    console.log((result * 100).toFixed(3) + "%");
  }
}
