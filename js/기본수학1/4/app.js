// 2869
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

solution(input);

function solution(input) {
  const [a, b, v] = input;
  const answer = Math.ceil((v - a) / (a - b)) + 1;
  // 나무의 v-a지점까지 밤이 되어 도달했다가
  // 다음날 낮에 v까지 오르는 것입니다. 그래서 +1을 해줍니다.
  console.log(answer);
}
