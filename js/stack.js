// 스택(Stack)
// 먼저 들어간 자료가 나중에 나오는 자료구조이다.
// LIFO(Last in First Out)라고도 부른다.
// 접시 쌓기라고 생각하면된다.
// 데이터를 입력하는 push() 와 데이터를 제거하는 pop() 등의 작업을 할 수 있다.
// ctrl+Z로 이전 작업을 취소하는 동작 등에서 사용된다.
// 크게 리스트와 연결리스트로 구현이 가능하다.
class Stack {
  constructor() {
    this.storage = {}
    this.top = 0
  }
  size() {
    return this.top
  }
  push(element) {
    this.storage[this.top] = element
    this.top += 1
  }
  pop() {
    let temp
    if (this.top > 0) {
      temp = this.storage[this.top - 1]
      //top은 길이이기때문에 top -1 해야 인덱스가 나온다.
      delete this.storage[this.top - 1]
      this.top -= 1
    }
    return temp
  }
}

const stack = new Stack()
stack.push("google")
stack.push("daum")
stack.push("naver")
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
