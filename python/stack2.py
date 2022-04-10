# python singly linked list(연결 리스트)로 스택 구현하기
# 연결 리스트의 각 원소는 노드라고한다.
# 각 노드는 데이터와 그 다음 노드를 가리키는 포인터를 가지고 있다.
class  Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedListStack():
    def __init__(self):
        self.head = None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        pop_object = None
        if self.isEmpty():
            print('Stack is Empty')
        else:
            pop_object = self.head.data
            self.head = self.head.next
        return pop_object
    
    def top(self):
        top_object = None
        if self.isEmpty():
            print('Stack is Empty')
        else:
            top_object = self.head.data
        return top_object

    def isEmpty(self):
        is_empty = False
        if self.head is None:
            is_emtpy = True
        return is_empty