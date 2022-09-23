// 10809
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const count = new Array(26).fill(-1);
  for (let x of input) {
    count[alphabet.indexOf(x)] = input.indexOf(x);
  }
  console.log(count.join(" "));
}
