// 11651
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  input = input.map((i) => i.split(" ").map(Number));
  let sorted = input.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  sorted = sorted.map((i) => i.join(" "));
  sorted = sorted.join("\n");
  console.log(sorted);
}
