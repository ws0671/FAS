// 2869
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(num) {
  let range = 1,
    block = 1;
  while (block < num) {
    block += 6 * range;

    range++;
  }
  console.log(range);
}

// 6의 배수씩 커진다
