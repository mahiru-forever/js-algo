// 跳表 SkipList
// 参考 https://github.com/dreamapplehappy/blog/tree/master/2018/12/02

// 跳表索引最大级数
const MAX_LEVEL = 16

// 跳表节点
class Node {
  // 节点的值
  data = null
  // 当前节点在跳表中的级数
  maxLevel = 0
  // refer是一个有着MAX_LEVEL大小的数组，refer属性存放着很多个索引
  // 如果用p表示当前节点，用level表示这个节点处于整个跳表索引的级数；那么p[level]表示在level这一层级p节点的下一个节点
  // p[level-n]表示level级下面n级的节点
  refer = new Array(MAX_LEVEL)
}

// 定义跳表类
class SkipList {
  // levelCount属性表示了当前跳表索引的总共级数
  levelCount = 1
  // head属性是一个Node类的实例，指向整个链表的开始
  head = new Node()

  // 在跳里面插入数据的时候，随机生成索引的级数
  static randomLevel() {
    let level = 1
    for (let i = 1; i < MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++
      }
    }
    return level
  }

  // 向跳表里面插入数据
  insert(value) {
    const level = SkipList.randomLevel()
    const node = new Node()
    node.data = value
    node.maxLevel = level

    const update = new Array(level).fill(new Node())
    let p = this.head
    for (let i = level - 1; i >= 0; i--) {
      while (!!p.refer[i] && value < p.refer[i].data) {
        p = p.refer[i]
      }
      update[i] = p
    }

    for (let i = 0; i < level; i++) {
      node.refer[i] = update[i].refer[i]
      update[i].refer[i] = node
    }

    if (level > this.levelCount) {
      this.levelCount = level
    }
  }

  // 查找跳表里面的某个数据节点，并返回
  find(value) {
    if (!value) {
      return null
    }

    let p = this.head
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (!!p.refer[i] && value > p.refer[i].data) {
        p = p.refer[i]
      }
    }

    if (!!p.refer[0] && p.refer[0].data === value) {
      return p.refer[0]
    }

    return null
  }

  // 移除跳表里面的某个数据节点
  remove(value) {
    let node
    let p = this.head
    const update = new Array(this.levelCount).fill(new Node())
    
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (!!p.refer[i] && value > p.refer[i].data) {
        p = p.refer[i]
      }
      update[i] = p
    }

    if (!!p.refer[0] && p.refer[0].data === value) {
      node = p.refer[0]
      for (let i = 0; i < this.levelCount; i++) {
        if (!!update[i].refer[i] && update[i].refer[i].data === value) {
          update[i].refer[i] = update[i].refer[i].refer[i]
        }
      }
      return node
    }

    return null
  }

  // 打印跳表里面的所有数据
  printAll() {
    let p = this.head
    while (!!p.refer[0]) {
      console.log(p)
      p = p.refer[0]
    }
  }
}
