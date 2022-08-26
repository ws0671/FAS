// 1406
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  let str = input.shift();
  const M = input.shift();
  input = input.map((i) => i.replace("\r", ""));
  const leftArr = str.split("");
  const rightArr = [];
  //커서 위치를 경계로 왼쪽, 오른쪽 배열로 나눠줌

  for (let x of input) {
    switch (x[0]) {
      case "L":
        if (leftArr.length) rightArr.push(leftArr.pop());
        break;
      case "D":
        if (rightArr.length) leftArr.push(rightArr.pop());
        break;
      case "B":
        if (leftArr.length) leftArr.pop();
        break;
      case "P":
        leftArr.push(x[2]);
        break;
    }
  }
  const answer = leftArr.concat(rightArr.reverse()).join("");
  console.log(answer);
  // 위와 같이 push를 하면 rightArr에는 문자가 역순으로 들어간다
  // 따라서 reverse()를 사용한다.
  // concat()은 어떤 배열에 인자로 들어오는 배열을 맨 뒤에서 합쳐준다.
  // pop은 시간복잡도가 O(1)인데, shift는 배열 맨 앞 요소를 빼야 하기 떄문에
  // 시간복잡도가 O(n)이다.
  // 따라서 큐(push/shift)가 아닌 스택(push/pop)을 사용해야 더 빠르게 실행된다.
  // 큐 => [1,2,3,4] 먼저 온 녀석이 먼저 나옴(줄서기) 1이 먼저 나옴
  // 스택 => [1,2,3,4] 나중 온 녀석이 먼저 나옴(그릇 쌓기) 4가 먼저 나옴
}
