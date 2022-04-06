const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(id) {
  console.log(id + "??!");
}

//이 문제에는 함정이있다.. 사이트에서 입력 부분을
//더블클릭하면 입력에 공백이 포함된 것을 알 수 있다.
//이 공백을 trim()을 이용하여 제거해줘야한다..
