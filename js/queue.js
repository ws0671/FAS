//큐(Queue)
//FIFO(First In First Out) 자료구조이다.
//줄 서기라고 생각하면된다.
//마찬가지로 리스트와 연결리스트로 구현이 가능하다.
class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0; //뒤쪽
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }
  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
      //storage가 객체라서 '0'의 문자열 형태로 넣어줌(키 값)
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      //delete 연산자는 객체의 속성을 제거합니다.
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

const queue = new Queue();
queue.add("google");
queue.add("daum");
queue.add("naver");
console.log(queue);
console.log(queue.size());
console.log(queue.popleft());
console.log(queue.popleft());
console.log(queue.popleft());
