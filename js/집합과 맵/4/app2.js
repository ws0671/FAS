// 10816
// Map이 아닌 object로 풀어보기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const haveCard = input[1].split(" ").map(Number);
  const problemCard = input[3].split(" ").map(Number);
  let answer = [];
  let haveCardObj = {};

  for (number of haveCard) {
    if (haveCardObj[number]) haveCardObj[number]++;
    else haveCardObj[number] = 1;
  }
  for (number of problemCard) {
    if (haveCardObj[number]) answer.push(haveCardObj[number]);
    else answer.push(0);
  }
  console.log(answer.join(" "));
}
