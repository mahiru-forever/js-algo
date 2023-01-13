/**
 * 基于链表实现的栈。
 * 
 *
 */

class Node {
  constructor(element) {
      this.element = element
      this.next = null
  }
}

export class StackBasedLinkedList {
  constructor() {
    this.top = null
  }

  push(el) {
    const node = new Node(el)

    if (this.top) {
      node.next = this.top
      this.top = node
    } else {
      this.top = node
    }
  }

  pop() {
    if (this.top === null) {
      return false
    }

    const val = this.top.element
    this.top = this.top.next
    return val
  }

  clear() {
    this.top = null
  }

  display() {
    let temp = this.top
    while (temp) {
      console.log(temp.element)
      temp = temp.next
    }
  }
}
