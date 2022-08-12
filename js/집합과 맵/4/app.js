// 10816
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = +input[0];
  const M = +input[2];
  const haveCard = input[1].split(" ").map(Number);
  const problemCard = input[3].split(" ").map(Number);
  let answer = [];
  let haveCardMap = new Map();
  for (number of haveCard) {
    if (haveCardMap.has(number))
      haveCardMap.set(number, haveCardMap.get(number) + 1);
    else haveCardMap.set(number, 1);
  }
  //Map객체의 value 값을 1씩증가

  for (number of problemCard) {
    if (haveCardMap.has(number)) answer.push(haveCardMap.get(number));
    else answer.push(0);
  }
  console.log(answer.join(" "));
}

//Map객체의 set()메서드는 Map객체에 key와 value를 추가할때 사용한다.
