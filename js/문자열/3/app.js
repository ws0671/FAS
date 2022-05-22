// 10809
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(S) {
  // 알파벳 소문자 -> 26 a-z
  // 길이가 26인 배열 answerArray. 배열의 0번째는 a, 1번째는 b
  // b의 아스키 : 98 - 97 ->1
  // a의 아스키 : 97 - 97 -> 0
  let answerArray = new Array(26).fill(-1);
  for (let i = 0; i < S.length; i++) {
    let nowChar = S[i];
    let answerArrayIdx = nowChar.charCodeAt() - 97;
    if (answerArray[answerArrayIdx] === -1) {
      answerArray[answerArrayIdx] = i;
    }
  }

  let answer = "";
  for (let i = 0; i < answerArray.length; i++) {
    answer += answerArray[i] + " ";
  }
  console.log(answer);
}
