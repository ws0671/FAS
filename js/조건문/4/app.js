// 14681
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = []
rl.on("line", function (line) {
  input.push(line)
}).on("close", function () {
  input = input.map((item) => +item)
  solution(input[0], input[1])
  process.exit()
})
function solution(x, y) {
  if (x > 0 && y > 0) {
    console.log(1)
  }
  if (x < 0 && y > 0) {
    console.log(2)
  }
  if (x < 0 && y < 0) {
    console.log(3)
  }
  if (x > 0 && y < 0) {
    console.log(4)
  }
}
//왜 인지 모르겠지만 readline을 사용해야 정답처리된다.
