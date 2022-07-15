// 2798
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  const [n, m] = input[0].split(" ").map((i) => +i);
  const nums = input[1].split(" ").map((i) => +i);

  let temp = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp = nums[i] + nums[j] + nums[k];
        if (temp > result && temp <= m) {
          result = temp;
        }
      }
    }
  }
  console.log(result);
}
