// 10818
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = input[1].split(" ");
solution(num);

function solution(num) {
  const ans = num.sort((a, b) => a - b);
  console.log(ans[0], ans.at(-1));
}
