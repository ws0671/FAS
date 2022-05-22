// 1157
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  console.log(input);
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let nowChar = input[i].toUpperCase();
    if (obj[nowChar]) {
      obj[nowChar]++;
    } else {
      obj[nowChar] = 1;
    }
  }
  let maxValue = -1;
  let maxChar = "";
  let isDuplicated = false;
  for (const el in obj) {
    if (obj[el] > maxValue) {
      maxValue = obj[el];
      maxChar = el;
      isDuplicated = false;
    } else if (obj[el] === maxValue) {
      isDuplicated = true;
    }
  }
  if (isDuplicated) {
    console.log("?");
  } else {
    console.log(maxChar);
  }
}
