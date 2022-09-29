// 11655
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  const changeROT13 = (ch) => {
    const Acode = "A".charCodeAt();
    const Zcode = "Z".charCodeAt();
    const acode = "a".charCodeAt();
    const zcode = "z".charCodeAt();
    let code = ch.charCodeAt();

    if (code >= Acode && code <= Zcode) {
      if (code + 13 > Zcode) code -= 26;
    } else if (code >= acode && code <= zcode) {
      if (code + 13 > zcode) code -= 26;
    } else return ch;

    return String.fromCharCode(code + 13);
  };

  const answer = input[0].split("").map((i) => changeROT13(i));
  console.log(answer.join(""));
}
