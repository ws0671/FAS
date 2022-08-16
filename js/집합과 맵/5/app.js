const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input);
function solution(input) {
  let n = parseInt(input[0].split(" ")[0]);
  let m = parseInt(input[0].split(" ")[1]);
  let n_man = input.slice(1, n + 1);
  let m_man = input.slice(n + 1);

  function binary_search(arr, name) {
    let high = arr.length - 1;
    let low = 0;
    let mid;

    while (low <= high) {
      mid = Math.floor((high + low) / 2);
      if (arr[mid] > name) high = mid - 1;
      else if (arr[mid] < name) low = mid + 1;
      else return true;
    }
    return false;
  }
  const [long, short] =
    n_man.length > m_man.length ? [n_man, m_man] : [m_man, n_man];
  long.sort();
  const dbj = short.filter((name) => binary_search(long, name));

  console.log(dbj.length + "\n" + dbj.sort().join("\n"));
}
