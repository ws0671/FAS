# 리스트를 이용한 큐의 구현
# 큐 맨 뒤에 요소 추가를 enqueue라고하고
# 큐 맨 앞쪽의 요소 삭제를 dequeue라고한다.
class ListQueue(object):
    def __init__(self):
        self.queue =[]

    def dequeue(self):
        if len(self.queue) == 0:
            return -1
        return self.queue.pop(0)
    
    def enqueue(self, n):
        self.queue.append(n)
        pass

    def printQueue(self):
        print(self.queue)

lq = ListQueue()
lq.enqueue(1)
lq.enqueue(2)
lq.enqueue(3)
lq.printQueue()
print(lq.dequeue())
print(lq.dequeue())
print(lq.dequeue())
lq.printQueue()