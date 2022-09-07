// 17413
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);

function solution(input) {
  let temp = "",
    isTag = false,
    ans = "";

  for (let x of input) {
    if (x === "<") {
      isTag = true;
      ans += temp.split("").reverse().join("") + x;
      temp = "";
    } else if (x === ">") {
      isTag = false;
      ans += temp + x;
      temp = "";
    } else if (x === " ") {
      ans += (!isTag ? temp.split("").reverse().join("") : temp) + " ";
      temp = "";
    } else {
      temp += x;
    }
  }
  console.log(ans + temp.split("").reverse().join(""));
}
