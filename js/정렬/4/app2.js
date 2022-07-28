// 2108
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(input) {
  const N = input.shift();
  const numbers = input.map((i) => +i).sort((a, b) => a - b);
  let map = {};
  let array = [];
  let most = 0;

  for (let num of numbers) {
    if (map[num]) map[num] + 1;
    else map[num] = 1;
  }

  let mostFrequency = Math.max(...Object.values(map));

  for (let num of numbers) {
    if (map[num] === mostFrequency) array.push(num);
  }

  if (array.length > 1) {
    array.sort((a, b) => a - b);
    most = array[1];
  } else most = array[0];

  const average = Math.round(numbers.reduce((a, b) => a + b) / N);
  const mid = Math.floor(N / 2);
  const range = numbers[N - 1] - numbers[0];

  console.log(`${average}\n${mid}\n${most}\n${range}`);
}
