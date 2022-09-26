// // 10820
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  let result = [];
  input = input.map((i) => i.replace(/\r/g, ""));
  for (let x of input) {
    if (x === "") continue;

    let arr = new Array(4).fill(0);
    for (let y of x) {
      if (y === " ") arr[3]++;
      else if (!isNaN(y)) arr[2]++;
      else if (y >= "a" && y <= "z") arr[0]++;
      else if (y >= "A" && y <= "Z") arr[1]++;
    }
    result.push(arr);
  }
  result = result.map((i) => i.join(" "));
  console.log(result.join("\n"));
}

// 몇가지 포인트가 있는 문제인데, 일단 if~ else if문에서
// 순서가 중요하다. 맨 먼저 공백 또는 숫자를 처리해줘야
// 다른 문제들을 예방할 수 있다.(순서에 따라 결과가 달라지는 부분을 생각해볼것)
// 두 번째는 이 문제가 input에 .trim()을 해버리면 안된다.
// 공백을 세는 문제이기때문에 .trim()을 사용하면 공백이 날아간다.
// 따라서 무지성 .trim()사용은 하지 말 것.
