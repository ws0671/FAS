// 11656
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input[0]);

function solution(input) {
  let arr = input.split("");
  let answer = [];
  while (arr.length !== 0) {
    let str = arr.join("");
    answer.push(str);
    arr.shift();
  }
  answer.sort();
  answer.forEach((i) => console.log(i));
}
