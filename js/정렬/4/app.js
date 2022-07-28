// 2108
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  let map = {};
  let array = [];
  let most = 0;
  input = input.map((i) => +i).sort((a, b) => a - b);
  const average = Math.round(input.reduce((a, b) => a + b) / N);
  const mid = input[Math.floor(N / 2)];

  // 각 숫자들에 대해 {'숫자':빈도} 입력
  for (let num of input) {
    if (map[num]) map[num] = map[num] + 1;
    else map[num] = 1;
  }

  let mostFrequency = Math.max(...Object.values(map));

  //map의 각 key(숫자들)에 대해
  for (let key in map) {
    //value가 최대빈도라면 array에 해당 key 넣기
    if (map[key] === mostFrequency) array.push(key);
  }
  //최빈값이 여러개라면
  if (array.length > 1) {
    array = array.sort((a, b) => a - b); // 오름차순 정렬
    most = array[1]; // 두번째로 작은 수 출력
  } else most = array[0]; //최빈값이 하나

  const range = input[N - 1] - input[0];
  console.log(`${average}\n${mid}\n${most}\n${range}`);
}

//출처: https://king-goni.tistory.com/entry/%EB%B0%B1%EC%A4%80-%ED%86%B5%EA%B3%84%ED%95%99-JavaScript-nodejs
