// 3052
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const arr = input.map((i) => +i);
  const result = arr.map((i) => i % 42);
  const set = new Set(result); 
  const uniqueArr = [...set];
  console.log(uniqueArr.length);
}
// 자료형 set의 사용법을 알아야한다.
// new Set(iterable) 반복가능한객체가 들어간다.
// 문제 풀때 spread 문법을 활용한다.
