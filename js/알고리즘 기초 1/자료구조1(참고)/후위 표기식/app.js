// 1918
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  //후위표기식에서 연산자는 뒤에 올수록 먼저 나올 확률이 높으므로
  //스택을 써준다. (후입선출)
  //*,/가 우선순위가 높으므로 이것들을 먼저 꺼내고
  //+,-를 꺼낸다.
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
