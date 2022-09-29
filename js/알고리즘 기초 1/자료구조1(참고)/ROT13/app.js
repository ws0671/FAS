// 11655
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  const encryptROT13 = (ch) => {
    const ACode = "A".charCodeAt();
    const ZCode = "Z".charCodeAt();
    const aCode = "a".charCodeAt();
    const zCode = "z".charCodeAt();
    let code = ch.charCodeAt();

    if (ACode <= code && code <= ZCode) {
      if (code + 13 > ZCode) code -= 26;
    } else if (aCode <= code && code <= zCode) {
      if (code + 13 > zCode) code -= 26;
    } else return ch;
    //공백일 경우 아스키코드로 32번임 참고하면되고, return ch 즉,
    //들어왔던 그 상태 그대로 나간다. 즉, 공백은 공백으로 반환된다.

    return String.fromCharCode(code + 13);
  };

  const answer = input[0].split("").map((i) => encryptROT13(i));
  console.log(answer.join(""));

  //input이랑 answer에 trim()을 없애주니까 답이 잘나온다.
  //trim()이 필요한 경우를 잘 판단해서 제출해야겠다.
}
