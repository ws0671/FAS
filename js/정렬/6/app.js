// 11650
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  const numbers = input.map((i) => i.split(" ").map(Number));
  let sorted = numbers.sort((a, b) => {
    //x가 같지 않으면 x에 대한 오름차순 정렬
    if (a[0] !== b[0]) return a[0] - b[0];
    //x가 같으면 y에 대한 오름차순 정렬
    return a[1] - b[1];
  });
  sorted = sorted.map((i) => i.join(" "));
  sorted = sorted.join("\n");
  console.log(sorted);
}

//언제부턴가 trim()를 써야만 통과가된다.
//trim()은 양옆 공백을 제거해주는 메서드인데
//공백이 input에 포함되어있는지 확인을 잘 못하겠다.
