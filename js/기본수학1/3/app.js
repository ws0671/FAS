// 1193
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(+input);
//key가 7일 경우
function solution(key) {
  let add = 0;
  let num = 0;
  // add는 라인을 계속 더해주는 누적 값이다.
  for (let i = 1; add < key; i++) {
    num = i; // 우리가 구하는 수의 라인 예시로는 4.
    if (add + i < key) {
      add += i;
    } else {
      break;
    }
  }
  let rest = key - add; //key는 7, add는 6
  //rest는 해당 줄에서 이동하는 칸 수
  //홀수이면 분자가 큰수부터 내림차순 분모는 1부터 오름차순
  if (num % 2 !== 0) {
    console.log(`${num + 1 - rest}/${rest}`);
    //여기서 +1을 해줘야 rest를 이용하여 규칙적으로 수를 구할 수 있다.
  } else {
    //짝수이면 분자는 1부터 오름차순 분모는 큰수부터 내림차순
    console.log(`${rest}/${num + 1 - rest}`);
  }
}
