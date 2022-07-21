const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(input) {
  const n = parseInt(input);
  let m = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    const candidateValue = i;

    const stringValue = candidateValue.toString();

    for (let j = 0; j < stringValue.length; j++) {
      sum += parseInt(stringValue[j]);
    }
    sum += candidateValue;
    if (n === sum) {
      m = candidateValue;
      break;
    }
  }
  console.log(m);
}
