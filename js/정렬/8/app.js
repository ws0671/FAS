// 1181
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();

  let set = Array.from(new Set(input)); //set을 이용해 중복 없애기
  let sorted = set.sort((a, b) => a.length - b.length); // 길이가 짧은 것 순서대로 정렬
  let arr = [];

  //길이가 같으면 사전 순으로 정렬.
  for (let i = 1; i <= sorted[sorted.length - 1].length; i++) {
    let temp = sorted.filter((el) => el.length === i);
    arr.push(...temp.sort());
  }
  console.log(arr.join("\n"));
  //sort()를 그냥 사용하면 사전식 배열로 된다.
}
