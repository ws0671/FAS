// 15552
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const T = input.shift();
  let answer = "";
  for (let i = 0; i < T; i++) {
    const sum = input[i].split(" ").map((i) => +i);
    answer += sum[0] + sum[1] + "\n";
  }
  console.log(answer);
}

// map을 사용하면 시간이 적게 걸려서 통과처리된다. 이유는 잘 모르겠다.
