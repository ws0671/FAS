// 10824
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(input);

function solution(input) {
  let arr = input.split(" ");
  const x = parseInt(arr[0] + arr[1]);
  const y = parseInt(arr[2] + arr[3]);

  console.log(x + y);
}
