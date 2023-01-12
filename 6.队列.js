/**
 * 基于链表实现的队列。
 *
 */

class Node {
  constructor(element) {
      this.element = element
      this.next = null
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = this.tail.next
    }
  }

  dequeue() {
    if (this.head) {
      const head = this.head
      this.head = head.next
      return head
    } else {
      console.log('队列已清空')
      return -1
    }
  }
}
