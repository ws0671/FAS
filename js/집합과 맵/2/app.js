// 14425
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const numbers = input.shift();
  const [n, m] = numbers.split(" ").map(Number);
  const n_arr = input.slice(0, n);
  const m_arr = input.slice(n);
  const set = new Set(n_arr);
  // 같은 문자열이 여러번 주어지는 경우가 없으므로
  // set을 사용한다.
  let ans = 0;
  m_arr.forEach((str) => {
    if (set.has(str)) ++ans;
  });
  console.log(ans);
}

// includes 와 slice(또는 splice)를 사용할 수 있는가?
