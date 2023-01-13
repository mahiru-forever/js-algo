/**
 * 基于链表实现的循环队列。
 *
 */

class Node {
  constructor(element) {
      this.element = element
      this.next = null
  }
}

class CircularQueue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = node
      this.head.next = this.head
      this.tail = this.head
    } else {
      const flag = this.head === this.tail

      this.tail.next = node
      this.tail = this.tail.next
      this.tail.next = this.head

      // 处理队列中仅有一个元素的情况
      if (flag) {
        this.head.next = this.tail
      }
    }
  }

  dequeue() {
    if (this.head === null) {
      return -1
    }

    const value = this.head.element
    if (this.head === this.tail) {
      this.head = null
      return value
    } else {
      this.head = this.head.next
      this.tail.next = this.head
      return value
    }
  }

  display() {
    let res = 0
    console.log('-------获取dequeue元素------')
    while (res !== -1) {
      res = this.dequeue()
      console.log(res)
    }
  }
}
