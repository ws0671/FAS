// 9012
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  input = input.map((i) => i.replace(/\r/g, ""));
  for (let i = 0; i < N; i++) {
    let answer = "";
    let cnt = 0;
    for (let x of input[i]) {
      cnt += x === "(" ? 1 : -1;
      if (cnt < 0) break;
    }
    cnt === 0 ? (answer = "YES") : (answer = "NO");
    console.log(answer);
  }
}
