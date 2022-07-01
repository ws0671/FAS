// 1929
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
solution(input);

function solution(input) {
  const [n, m] = input.map((i) => Number(i));
  const prime = { 1: true };
  for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
    //구하는수의 제곱근까지의 소수의 배수들만 제외하면
    //그 이상의 소수들은 구하는 수를 초과하므로 의미가 없다
    //따라서 제곱근까지만 해준다.
    if (prime[i]) {
      continue;
    }
    for (let j = i ** 2; j <= m; j += i) {
      prime[j] = true;
    }
    //배수들을 제거해주는 과정. 여기서는 소수가 아닌 값을 true
    //로 나타내었다.
  }
  const results = [];
  for (let i = n; i <= m; i++) {
    if (!prime[i]) {
      results.push(i);
    }
  }
  console.log(results.join("\n"));
}
// 이번 문제처럼 큰 범위가 나오면 에라토스테네스의 체
// 사용하는 것이 효율적이다.
// 이 방법은 2부터 n까지 자신을 제외한 배수를 제거하다 보면
// 소수만 남는다는 원리이다.
// 어떤 수의 배수가 되는 수는 소수가 될 수 없다.
// 완전히 이해가지는 않지만 그런가보다하고 넘어가야겠다.
