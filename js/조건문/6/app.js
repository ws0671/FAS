// 2525
const fs = require("fs")
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt"
let input = fs.readFileSync(filePath).toString().split("\n")
const [h, m] = input[0].split(" ")

solution(+h, +m, +input[1])

function solution(h, m, cookTime) {
  const endHour = parseInt((h * 60 + m + cookTime) / 60)
  const endMinute = parseInt((h * 60 + m + cookTime) % 60)
  console.log(endHour >= 24 ? endHour - 24 : endHour, endMinute)
}

// 비구조화 할당을 사용하자!
