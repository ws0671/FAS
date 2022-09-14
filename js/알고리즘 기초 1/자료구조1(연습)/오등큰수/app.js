// 17299
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const N = +input.shift();
  const splited = input[0].split(" ");
  let arr = [];
  let stack = [];
  let count = {};

  for (let x in splited) {
    if (!count[splited[x]]) count[splited[x]] = 1;
    else count[splited[x]]++;
  }
  for (let i = 0; i < N; i++) {
    while (
      stack.length !== 0 &&
      count[splited[i]] > count[splited[stack[stack.length - 1]]]
    )
      arr[stack.pop()] = splited[i];
    stack.push(i);
    //첨에 스택에 0이 들어가고 그다음 인덱스1 값과
    // 스택에 있는 인덱스 0 값을 비교하여 인덱스 1(스택에 들은 수 보다 오른쪽에 있는)
    // 의 값이 크면 그 값은 바로 오등큰수가 된다.
    // 만약 값이 작으면 스택에 인덱스를 추가해준다.
    console.log(stack);
  }
  while (stack.length !== 0) {
    arr[stack.pop()] = -1;
  }
  //오등큰수가 없는 원소는 -1을 넣어줌

  console.log(arr.join(" ").trim());
}
