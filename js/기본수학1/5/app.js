// 10250
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  const T = input.shift();
  for (let i = 0; i < T; i++) {
    const [h, w, n] = input[i].split(" ").map((v) => +v);
    const floor = n % h; //구하려는 층 수가 나온다.
    const room = String(Math.ceil(n / h)).padStart(2, "0");
    //padStart메소드는 첫인자가 2라고하면 앞의 수가 두자리수이면 빈공간이
    //없으므로 두번째 인자가 사용되지 않고 앞의 수가
    //한 자리수이면 앞에서 부터 빈공간을 두 번째 인자로 채운다.
    console.log(`${floor !== 0 ? floor : h}${room}`);
  }
}
