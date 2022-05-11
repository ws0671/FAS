// 3052
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const arr = [];
  input.forEach((x) => {
    const num = x % 42;
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
    // arr에 이미 있으면 넣지말고 없으면 넣는다.
    //즉, 중복 제거이다.
  });
  console.log(arr.length);
}

// set을 사용하지 않은 풀이
