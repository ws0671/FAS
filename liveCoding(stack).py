# 스택 구현하기
# 접시 쌓기 
# 라스트 인 퍼스트 아웃 자료구조이다.(LIFO)
# 리스트로 구현해보기
class ListStack:
    def __init__(self) :
         self.top = []

    def __str__(self): 
        str = ''
        for item in self.top:
            str += item+' '
        return str

    def push(self, item):
        self.top.append(item)
    def pop(self):
        self.top.pop()
        if len(self.top) == 0:
            return -1

stack = ListStack()
stack.push('google')
print(stack)
stack.push('apple')
print(stack)
print(stack.pop())
print(stack.pop())