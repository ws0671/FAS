// 10814
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  input = input.map((i) => i.split(" "));
  input.sort((a, b) => a[0] - b[0]);
  let result = input.map((i) => i.join(" "));
  console.log(result.join("\n"));
  // 안정 정렬, 불안정 정렬이있다.
  // 안정 정렬은 중복된 값을 입력 순서와 동일하게 정렬하는
  // 정렬 알고리즘의 특성이다.
  // 불안정 정렬은 중복된 값을 입력 순서와 상관없이 무작위로
  // 뒤섞인 상태에서 정렬이 이루어 집니다.
  // sort()함수는 안정정렬이다.
}
