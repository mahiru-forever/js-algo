/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */
export class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export class SinglyLinkedList {
  constructor() {
    const node = new Node('head')
    this.head = node
  }

  // 根据value查找节点
  findByValue(val) {
    let current = this.head.next

    while (current && current.element !== val) {
      current = current.next
    }

    return current
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let current = this.head.next
    let pos = 0

    while (current && index !== pos) {
      current = current.next
      pos++
    }

    return current
  }

  // 向链表末尾追加节点
  append(el) {
    const node = new Node(el)
  
    let current = this.head
    while (node.next) {
      current = current.next
    }

    current.next = node
  }

  // 指定元素向后插入
  insert(newEl, prev) {
    const current = this.findByValue(prev)

    if (current === null) {
      console.log('未找到插入位置')
      return
    }

    const node = new Node(newEl)
    node.next = current.next
    current = node.next
  }

  // 查找前一个
  findPrev(el) {
    let current = this.head

    while (current.next && current.next.element !== el) {
      current = current.next
    }

    if (current.next === null) {
      return null
    }

    return current
  }

  // 根据值删除
  remove(el) {
    const current = this.findPrev(el)

    if (current === null) {
      console.log('未找到删除节点')
      return
    }

    current.next = current.next.next
  }

  // 遍历显示所有节点
  display() {
    let current = this.head.next

    while (current) {
      console.log(current.element)
      current = current.next
    }
  }
}
