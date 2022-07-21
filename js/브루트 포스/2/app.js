// 2231
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
solution(+input);

function solution(input) {
  const n = input;
  let m = 0;
  for (let i = 0; i < n; i++) {
    //각 자리수와 후보값의 합을 구하기 위한 변수
    let sum = 0;

    //0부터 시작하는 후보값
    const candidateValue = i;

    //각 자리수를 구하기 위해서 숫자를 string으로 변환하여 계산한다.
    const stringValue = candidateValue.toString();

    for (let j = 0; j < stringValue.length; j++) {
      sum += parseInt(stringValue[j]);
    }
    sum += candidateValue;
    if (sum === n) {
      m = candidateValue;
      break;
    }
  }
  console.log(m);
}
