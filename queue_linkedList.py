class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedListQueue():
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, data):
        new_node = Node(data)
# 이런식으로 인자를 넘기면 Node 클래스의 init의 두 번째 파라미터로 받는다.
        if self.front is None:
            self.front = new_node
            self.rear = new_node
        else: 
            self.rear.next = new_node
            self.rear = self.rear.next
    
    def dequeue(self):
        dequeue_object = None
        if self.isEmpty():
            print("Queue is Empty")
        else:
            dequeue_object = self.front.data
            self.front = self.front.next

        if self.front is None:
            self.rear = None
        return dequeue_object

    def peek(self):
        front_object = None
        if self.isEmpty():
            print("Queue is Empty")
        else:
            front_object = self.front.data
        return front_object

    def isEmpty(self):
        is_empty = False
        if self.front is None:
            is_empty = True
        return is_empty

queue = LinkedListQueue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
print(queue.dequeue())
print(queue.peek())
