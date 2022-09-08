// 17298
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const n = Number(input.shift());
  const arr = input[0].split(" ").map(Number);
  const answer = Array.from({ length: n }, () => -1);
  //  new Array(n).fill(-1)
  const stack = [];
  //stack은 오큰수를 구해야할 인덱스이다.
  //stack을 사용한 이유는 탐색시에
  //시간복잡도가 O(n)이기 때문에
  //j=i인 이중 for문으로 풀을 경우 시간복잡도가 O(n^2)이다
  //일반 이중 for문보다 시간이 적게 걸리지만 근사치를 계산하기때문에
  //똑같이 O(n^2)으로 표현한다.
  for (let i = 0; i < n; i++) {
    while (arr[stack[stack.length - 1]] < arr[i] && stack.length) {
      answer[stack.pop()] = arr[i];
      // 오큰수를 answer에 넣는다.
    }
    stack.push(i);
    // i=0 [0]
    // i=1 [1]
    // i=2 [1,2]
    // i=3 [3]
    console.log(stack);
  }
  console.log(answer.join(" "));
}
