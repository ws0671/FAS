// 1406
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  let str = input.shift();
  const M = input.shift();
  let pointer = str.length;
  input = input.map((i) => i.replace(/\r/g, ""));
  console.log(input[0][2]);
  const strArr = str.split("").map((i) => i.replace(/\r/g, ""));
  console.log(strArr);
  for (let x of input) {
    if (x === "L" && pointer !== 0) pointer--;
    if (x === "D" && pointer !== str.lenght) pointer++;
    if (x.includes("P")) strArr.splice(pointer, 0, x[2]);
    if (x === "B" && pointer !== 0) {
      strArr.splice(pointer - 1, 1);
      pointer--;
    }
  }
  console.log(strArr.join(""));
}

// 시간초과가 나오는 풀이이다.
