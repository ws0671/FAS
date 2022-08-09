// 10815
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  let N = Number(input[0]);
  let ownedCard = new Set(input[1].split(" ").map(Number));
  let M = Number(input[2]);
  let card = input[3].split(" ").map(Number);
  let arr = [];

  for (let i = 0; i < M; i++) {
    if (ownedCard.has(card[i])) arr.push(1);
    else arr.push(0);
  }
  console.log(arr.join(" "));
}

// set을 사용하지않고 array를 쓰면 시간초과가 난다고한다.
