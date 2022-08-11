// 1620
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const numbers = input.shift();
  const [n, m] = numbers.split(" ").map(Number);
  const n_arr = input.slice(0, n);
  const m_arr = input.slice(n);
  let answer = [];
  const poketBook = new Map(n_arr.map((v, i) => [v, i + 1]));
  m_arr.forEach((v) => {
    if (Number.isNaN(+v)) answer.push(poketBook.get(v));
    else answer.push(n_arr[+v - 1]);
  });
  console.log(answer.join("\n"));
}

//map객체는 key와 value 한 쌍으로 구성되어있다.
//get()을 사용하면 key값을 인자로 넣어 value를 출력할 수 있다.
