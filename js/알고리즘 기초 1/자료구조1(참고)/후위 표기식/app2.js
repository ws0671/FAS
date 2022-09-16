// 1918
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  const infix = input.split("");
  let postfix = "";
  let stack = [];

  for (let i = 0; i < infix.length; i++) {
    let ch = infix[i];
    if (ch >= "A" && ch <= "Z") postfix += ch;
    else if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      while (stack.length && stack[stack.length - 1] !== "(")
        postfix += stack.pop();
      stack.pop();
    } else if (ch === "+" || ch === "-") {
      while (stack.length && stack[stack.length - 1] !== "(")
        postfix += stack.pop();
      stack.push(ch);
    } else if (ch === "*" || ch === "/") {
      while (
        stack.length &&
        (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
      )
        postfix += stack.pop();
      stack.push(ch);
    }
  }
  while (stack.length) postfix += stack.pop();
  console.log(postfix);
}

// 한 문자씩 순회하면서 연산자가 나오면 일단 스택에 넣어주고 알파벳을 배치한 후 연산자를 배치한다.
// *,/는 우선순위가 높기 떄문에
// 먼저 출력이 되어야한다.
// +,-의 경우 괄호 내부에 있으면 같은 depth이므로
// 스택에서 순서대로 출력한다.
// 예를들어 *가 들어오면 스택에 *가 또 있으면 먼저 들어온 연산자가
// 우선순위가 있으므로 출력이 되는 것이다.
// 100퍼센트 이해가 가지는 않는다.
