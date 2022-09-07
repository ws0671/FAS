// 17413
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  let temp = "",
    answer = "",
    isTag = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "<") {
      isTag = true;
      answer += temp.split("").reverse().join("") + "<";
      temp = "";
    } else if (input[i] === ">") {
      isTag = false;
      answer += temp + ">";
      temp = "";
    } else if (input[i] === " ") {
      answer = (isTag ? temp : temp.split("").reverse().join("")) + " ";
      temp = "";
    } else temp += input[i];
  }
  console.log(answer + temp.split("").reverse().join(""));
}
