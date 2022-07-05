// 9020
// 재귀로 풀기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(input);

function solution(input) {
  function factorial(num) {
    if (num <= 1) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  console.log(factorial(input));
}

//간단한 식이지만 이렇게 재귀로 표현하는게 어려운 것 같다.
//재귀 식 만드는 것에 익숙해져야겠다
