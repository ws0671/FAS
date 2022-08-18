const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);
function solution(input) {
  const array = input.map((i) => i.replace(/\r/g, ""));
  const stack = [];
  const result = [];
  const len = array.shift();

  for (let i = 0; i < len; i++) {
    switch (array[i]) {
      case "pop":
        result.push(stack.pop() || -1);
        break;
      case "size":
        result.push(stack.length);
        break;
      case "empty":
        result.push(stack[0] ? 0 : 1);
        break;
      case "top":
        result.push(stack[stack.length - 1] || -1);
        break;
      default:
        stack.push(array[i].split(" ")[1]);
        break;
    }
  }
  console.log(result.join("\n"));
}
