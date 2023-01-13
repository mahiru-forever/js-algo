/**
 * 使用前后栈实现浏览器的前进后退。
 * 
 */

import { StackBasedLinkedList } from './4.基于链表实现栈'

class SampleBrowser {
  constructor() {
    this.normalStack = new StackBasedLinkedList()
    this.backStack = new StackBasedLinkedList()
  }

  // 正常浏览页面
  pushNormal(name) {
    this.normalStack.push(name)
    this.backStack.clear()
  }

  // 后退
  back() {
    const value = this.normalStack.pop()
    if (value === null) {
      console.log('无法后退')
      return
    }

    this.backStack.push(value)
  }

  // 前进
  front() {
    const value = this.backStack.pop()
    if (value === null) {
      console.log('无法前进')
      return
    }
    this.normalStack.push(value)
  }

  // 打印栈内数据
  displayAllStack() {
    console.log('---后退页面---')
    this.backStack.display()
    console.log('---浏览页面---')
    this.normalStack.display()
  }
}
