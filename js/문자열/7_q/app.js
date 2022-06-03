// 2908
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

solution(input);

function solution(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    const splitStr = input[i].split("");
    const reverseArr = splitStr.reverse();
    const joinArr = reverseArr.join("");
    arr.push(joinArr);
  }
  if (+arr[0] > +arr[1]) {
    console.log(+arr[0]);
  } else {
    console.log(+arr[1]);
  }
}
