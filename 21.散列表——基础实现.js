// 最基本的散列表

class HashTable {
  constructor() {
    this.table = []
    this.pivot = 37 // 任意数
  }

  // 散列函数
  loseHashCode(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    return hash % this.pivot
  } 

  // 新增
  put(key, value) {
    const pos = this.loseHashCode(key)

    this.table[pos] = value
  }

  // 删除
  remove(key) {
    this.table[this.loseHashCode(key)] = undefined
  }

  // 获取
  get(key) {
    return this.table[this.loseHashCode(key)]
  }

  // 打印
  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        return this.table[i]
      }
    }
  }
}
