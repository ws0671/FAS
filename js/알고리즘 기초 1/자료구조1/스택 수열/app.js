// 1874
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const n = input.shift();
  const stack = [];
  let pointer = 0;
  let answer = "";

  for (let i = 1; i <= n; i++) {
    stack.push(i);
    answer += "+ \n";
    while (stack[stack.length - 1] === parseInt(input[pointer])) {
      stack.pop();
      answer += "- \n";
      pointer++;
    }
  }
  console.log(!stack.length ? answer : "NO");
}
/*
문제 이해가 어려웠다. 1부터 n까지의 수를 스택에 넣고
push,pop을 이용해 입력된 수열을 만들 수 있는지에 대한
문제였다. 미리 n까지 수를 다 넣어버리면 수열을 만들 수 없기 때문에
하나 넣고 검사해서 pop하거나 하는식으로 해줘야한다.
*/
