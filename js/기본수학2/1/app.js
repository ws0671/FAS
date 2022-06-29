// 1978
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  let answer = 0;
  const inputArr = input[1].split(" ").map((i) => +i);

  inputArr.forEach((x) => {
    let cnt = 0;
    for (let i = 1; i < x; i++) {
      if (x % i === 0) {
        cnt++;
      }
    }
    if (cnt === 1) {
      answer++;
      //소수는 1과 자기자신으로만 나누어떨어지는 수이다.(1은 제외)
      //따라서 for 반복문을 보면 1부터 자기자신전까지를 반복해서 나누어준다
      //그래서 cnt가 1인 경우엔 소수일 것이다.
    }
  });
  console.log(answer);
}
