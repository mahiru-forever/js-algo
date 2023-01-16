// 带碰撞处理的Hash表

class HashTable {
  constructor() {
    this.store = Object.create(null)
  }

  // 抄来的hash算法
  hash(string) {
    let len = string.length;
    let hash = len;
    for (let i = 0; i < len; i++) {
        hash = ((hash << 5) ^ (hash >> 27)) ^ string.charCodeAt(i);
    }
    return hash & 0x7FFFFFFF;
  }

  isCresh(item) {
    return Object.prototype.toString.call(item) === "[object Map]"
  }

  // 添加
  put(item) {
    if (typeof item.key !== 'string') {
      throw 'prop key must string'
    }

    const hash = this.hash(item.key)
    // 碰撞处理
    const cresh = this.store[hash]
    if (cresh) {
      if (cresh.key === item.key) {
        this.store[hash] = item
      }

      if (this.isCresh(cresh)) {
        this.store[hash] = new Map()
        this.store[hash].set(cresh.key, cresh)
      }

      this.store[hash].set(item.key, item)
    } else {
      this.store[hash] = item
    }
  }

  // 查找
  get(key) {
    const hash = this.hash(key)
    const val = this.store[hash] || null
    if (this.isCresh(val)) {
      return val.get(key) || null
    } else {
      return val
    }
  }

  remove(key) {
    const hash = this.hash(key)
    const value = this.store[hash]

    if (!value) {
      return null
    }

    if (this.isCresh(value)) {
      value.delete(key)
    } else {
      delete this.store[hash]
    }
  }

  clear() {
    this.store = Object.create(null)
  }

  print() {
    const values = Object.values(this.store)
    values.forEach(v => {
      if (this.isCresh(v)) {
        v.forEach(item => {
          console.log(item)
        })
      } else {
        console.log(v)
      }
    })
  }
}
