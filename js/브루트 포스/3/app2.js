const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const N = input.shift();
  input = input.map((i) => i.split(" ").map((i) => +i));
  let result = [];
  for (let i = 0; i < N; i++) {
    let cnt = 1;
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
          cnt++;
        }
      }
    }
    result.push(cnt);
  }
  console.log(result.join(" "));
}
