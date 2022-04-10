//Stack에 대한 ADT(추상자료형)
//Array : stack을 담을 배열이자 stack 그 자체
//push : stack에 새 요소 추가
//pop : stack의 맨 위에 있는 요소 삭제
//peek : stack의 맨 위에 있는 요소 확인
//lefts: stack에 있는 모든 요소 문자열로 반환
//clear: stack에 있는 모든 요소 삭제
//empty : stack에 남은 요소가 있는지 없는지 확인

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack);
myStack.peek();
myStack.push("google");
myStack.push("facebook");
myStack.push("udemy");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
