//1316
// 1316
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let n = +input.shift();

let cnt = 0;
for (let i = 0; i < n; i++) {
  let word = input[i];
  let str = "";
  let isGroupword = true;

  for (let j = 0; j < word.length; j++) {
    if (!str.includes(word[j])) {
      str += word[j];
    } else if (str.indexOf(word[j]) !== str.length - 1) {
      //단어가 처음 나올때는 인덱스가 일치하는데,
      //그 다음 나올때(중복해서 나올때) 인덱스가 일치하지 않는다.
      isGroupword = false;
      break;
    }
  }
  if (isGroupword) {
    cnt++;
  }
}

console.log(cnt);
