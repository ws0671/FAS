// 10828
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  input = input.map((i) => i.replace(/\r/g, ""));
  const array = input;
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

// 스택은 접시쌓기이다. 위에 올리고 위에서 꺼낸다.
// 개행문자 \r가 input 배열에 들어가있어서 switch문이
// 정상작동하지 않았다. 따라서 문자열.replace를 사용하여
// 일일이 제거해주었다.
