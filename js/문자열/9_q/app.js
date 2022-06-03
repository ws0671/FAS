//2941
const fs = require("fs");
const filePath = "/dev/stdin";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("a");
  }
  console.log(input.length);
}

solution(input);
