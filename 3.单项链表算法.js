/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */
import { SinglyLinkedList, Node } from './2.单项链表'

class LinkedListAlgo extends SinglyLinkedList {
  constructor() {
    super()
  }

  // 尾插法 反转单链表
  reverseList() {
    const root = new Node('head')
    let current = this.head.next

    while (current) {
      const next = current.next
      current.next = root.next
      root.next = current
      current = next
    }

    this.head = root
  }

  // 环验证
  checkCircle() {
    let fast = this.head.next
    let slow = this.head

    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next

      if (fast === slow) {
        return true
      }
    }

    return false
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    if (this.checkCircle()) {
      return false
    }

    this.reverseList()
    let pos = 1
    let current = this.head.next

    while (current && pos < index) {
      current = current.next
      pos++
    }

    if (current === null) {
      console.log('无法删除最后一个节点或者该节点不存在')
      this.reverseList()
      return false
    }

    this.remove(current.element)

    this.reverseList()
  }

  // 求中间节点
  findMiddleNode() {
    let fast = this.head
    let slow = this.head

    while (fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
    }

    return slow
  }
}
