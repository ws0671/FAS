// 10799
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  input = input.split("");

  let arr = [];
  let cnt = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") arr.push(input[i]);
    else {
      if (input[i - 1] === "(") {
        arr.pop();
        cnt += arr.length;
      } else {
        arr.pop();
        cnt++;
      }
    }
  }
  // 레이저로 잘렸을 경우 arr의 length 만큼 막대가 증가하고,
  // 쇠막대기가 줄어드는 순간 막대값을 +1해주면
  // 결국 모든 쇠막대를 구하게된다.
  // 맨 처음에 나오는 레이저의 처리는 arr가 비어있기때문에
  // 막대값이 증가하지않는다.
  // 문제를 처음 봤을때 이런식으로 막대값을 증가시키는 것을
  // 생각하는 것은 어렵다. 이러한 아이디어에 익숙해져야겠다.
  console.log(cnt);
}
