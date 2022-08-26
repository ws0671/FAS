// 1158
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const arr = [];
  const answer = [];
  let index = K - 1;
  for (let i = 1; i <= N; i++) arr.push(i);
  while (arr.length) {
    answer.push(arr.splice(index, 1));
    index = (index - 1 + K) % arr.length;
    // 계속 한 명씩 제거 되기 떄문에 index에 계속 -1을 해주고
    // index를 전체 길이로 나눈 나머지가
    // 결국엔 index가 된다.
  }
  console.log(`<${answer.join(", ")}>`);
  //숫자 모양의 문자열을 숫자로 잘 바꿔줘야한다.
}
