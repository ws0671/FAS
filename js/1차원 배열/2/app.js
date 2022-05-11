// 2562
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(num) {
  const arr = num.map((i) => +i);
  const defalut = [...arr];
  const sortedArr = arr.sort((a, b) => a - b);
  const max = sortedArr.pop();
  const ans = defalut.indexOf(max) + 1;
  console.log(max);
  console.log(ans);
}

//js에서 최대값,최소값은 sort를 사용해라
