// 2480
const fs = require("fs")
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt"
let input = fs.readFileSync(filePath).toString().split(" ")
const [x, y, z] = input
solution(+x, +y, +z)

function solution(x, y, z) {
  let ans = 0
  let max = 0
  if (x > y) max = x
  else max = y
  if (max < z) max = z
  if (x === y && y === z && z === x) {
    ans = 10000 + 1000 * x
  }
  if (x !== y || y !== z || z !== x) {
    if (x === y) ans = 1000 + x * 100
    if (y === z) ans = 1000 + y * 100
    if (z === x) ans = 1000 + z * 100
  }
  if (x !== y && y !== z && z !== x) {
    ans = max * 100
  }
  console.log(ans)
}
