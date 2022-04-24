// 2884
const fs = require("fs")
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt"
let input = fs.readFileSync(filePath).toString().split(" ")

solution(+input[0], +input[1])

function solution(h, m) {
  if (m >= 45) console.log(h, m - 45)
  if (h === 0 && m < 45) console.log(23, 60 + m - 45)
  else if (m < 45) console.log(h - 1, 60 + m - 45)
}
