// 4673
solution();

function d(num) {
  let sum = 0;
  const strNum = String(num);
  for (let i = 0; i < strNum.length; ++i) {
    sum += +strNum[i];
    //문자를 암묵적 형변환으로 숫자로 바꿔줌
  }
  return num + sum;
}

function solution() {
  const arr = Array(10001).fill(0);
  for (let i = 1; i <= 10000; ++i) {
    const ans = d(i);
    if (ans <= 10000) {
      arr[ans]++;
      //생성자의 인덱스 값을 찾아서 1로 만들어주는 연산
    }
  }
  for (let i = 1; i <= 10000; ++i) {
    if (arr[i] === 0) {
      //arr에서 1(생성자)를 제외한 수들이 셀프넘버이므로
      //0인 값을 출력한다.
      console.log(i);
    }
  }
}
