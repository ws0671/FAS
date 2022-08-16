const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);
function solution(input) {
  const [a, b] = input[0].split(" ").map(Number);
  const a_arr = input[1].split(" ").map(Number);
  const b_arr = input[2].split(" ").map(Number);
  const set_a = new Set(a_arr);
  const set_b = new Set(b_arr);

  const a_set = a_arr.filter((item) => !set_b.has(item));
  const b_set = b_arr.filter((item) => !set_a.has(item));
  console.log(a_set.length + b_set.length);
}
