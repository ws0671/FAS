// 9093
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  for (let i = 0; i < N; i++) {
    let str = input[i].split(" ");
    for (let j = 0; j < str.length; j++) {
      if (str[j].length >= 2)
        str[j] = str[j].replace("\r", "").split("").reverse().join("");
    }
    console.log(str.join(" "));
  }
}

// '\r' 개행 문자를 삭제해야한다.
// 배열의 순서를 역순으로 하는 reverse()를 사용한다.
// 문자열은 reverse()같은 함수가 없어서 배열로 만들어 거꾸로해준뒤
// join()을 이용해 다시 문자열로 만들어준다.
