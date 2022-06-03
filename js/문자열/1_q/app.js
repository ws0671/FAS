// 11654
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  const answer = input.charCodeAt();
  console.log(answer);
}

// charCodeAt() 메서드를 사용하면 아스키코드 값을 구할 수 있다.
