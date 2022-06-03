// 2775
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);
//a층의 b호에 살려면 자신의 아래층(a-1)의 1호부터 b호까지
//사람들의 수의 합만큼 필요하다.
function solution(input) {
  for (let t = 0; t < input[0]; t++) {
    const k = +input[t * 2 + 1]; //층 수
    const n = +input[t * 2 + 2]; //몇호
    const house = Array(k + 1) //0층이 있으므로 +1 해준다
      .fill()
      .map((_) => Array(n + 1).fill(0)); //0호를 무시하기위해 +1해준 것 같다.
    //0층을 정의해주는 for문
    for (let i = 0; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        if (i > 0 && j > 1) break;
        house[i][j] = j;
      }
    }
    //k층n호의 사람수는 k층n-1호 + k-1층n호 이다.
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        house[i][j] = house[i - 1][j] + house[i][j - 1];
      }
    }
    console.log(house[k][n]);
  }
}

//이 식을 한 번에 생각해내기 어려울 것 같다. 어려운 문제.
