// 10808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");
solution(input);

function solution(input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const count = new Array(26).fill(0);

  input.forEach((i) => count[alphabet.indexOf(i)]++);

  console.log(count.join(" "));
}
