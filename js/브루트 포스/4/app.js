// 1018
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);

function solution(input) {
  const NM = input
    .shift()
    .split(" ")
    .map((i) => +i);
  const N = NM.shift();
  const M = NM.shift();
  const minArr = [];

  const whiteFirst = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  const blackFirst = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  function paintWhiteFirst(x, y) {
    let count = 0;

    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (input[i][j] !== whiteFirst[i - y][j - x]) {
          count++;
        }
        // input은 x,y로 쪼갤 좌표를 정해주고
        // whiteFirst같은 함수는 맨왼쪽부터 하나씩 다 비교해야하기때문에
        // [i-y][j-x]로 좌표를 맞춰준다.
      }
    }
    return count;
  }

  function paintBlackFirst(x, y) {
    let count = 0;
    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (input[i][j] !== blackFirst[i - y][j - x]) {
          count++;
        }
      }
    }
    return count;
  }
  for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
      minArr.push(paintWhiteFirst(j, i));
      minArr.push(paintBlackFirst(j, i));
    }
  }
  console.log(Math.min(...minArr));
}

//식을 세우기가 어렵다. 브루트 포스 개념을 활용하면
//비교적 간단하게 해결이 되는 것 같기는 한데,
//이해하는데 어느정도 시간이 걸렸다.
