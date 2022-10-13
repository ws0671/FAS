// 2609
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
solution(input);

function solution(input) {
  input = input.map((i) => +i);
  let [A, B] = input;
  let min = 0;
  let max = 0;
  if (A > B) {
    max = A;
    min = B;
  } else {
    max = B;
    min = A;
  }
  let r = 0;
  while (min !== 0) {
    r = max % min;
    max = min;
    min = r;
  }
  console.log(max);
  console.log((A * B) / max);
}

//유클리드 호제법을 이용한다.
// 두 수 a,b에서 a를 b로 나눈 나머지를 r이라(단, a>b) 하면
// a,b의 최대공약수는 b와r의 최대 공약수와 같다.
// 이 성질에 따라, b를 r로 나눈 나머지를 구하고
// r을 r`로 나눈 나머지를 구하는 과정을 반복하여
// 나머지가 0이 되었을 때 나누는 수가 a,b의 최대공약수이다.
// 최소공배수는 a*b/최대공약수 이다.
