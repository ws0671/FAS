// 1935
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  input = input.map((i) => i.replace("\r", ""));
  const N = +input.shift();
  const expression = input.shift();
  let stack = [];
  let obj = {};

  for (let i = 0; i < expression.length; i++) {
    let current = expression[i];
    if (current.charCodeAt() >= 65 && current.charCodeAt() <= 90) {
      if (!obj[current]) obj[current] = input.shift();
      stack.push(obj[current]);
    } else {
      let second = Number(stack.pop());
      let first = Number(stack.pop());
      let tempResult = 0;

      switch (current) {
        case "+":
          tempResult = first + second;
          break;
        case "-":
          tempResult = first - second;
          break;
        case "/":
          tempResult = first / second;
          break;
        case "*":
          tempResult = first * second;
          break;
      }
      stack.push(tempResult);
    }
  }
  console.log(stack[0].toFixed(2));
}
