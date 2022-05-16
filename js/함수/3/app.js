//1065
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);
function f(num) {
  const strNum = String(num);
  if (strNum.length <= 2) {
    return true;
    //두 자리수이하면 무조건 등차로 취급
  }
  const diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1];
  for (let i = 2; i < strNum.length; ++i) {
    if (strNum[i] - beforeNum !== diff) {
      return false;
    }
    beforeNum = +strNum[i];
    //beforeNum을 조정하면서 diff와의 차이를 비교
    //차이가 같다면 등차수열이다.
  }
  return true;
}
function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; ++i) {
    if (f(i)) {
      cnt++;
    }
  }
  console.log(cnt);
  //몇개인지 출력한다.
}
