//11478
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);
function solution(input) {
  const str = input[0];
  let s = new Set();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      s.add(str.slice(i, j));
    }
  }
  console.log(s.size);
}
