// 搜索二叉树

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null
  }

  inset(num) {
    const node = new Node(num)
    
    if (this.root === null) {
      this.root = node
      return
    }

    const pNode = this.getPrev(num)
    if (num < pNode.value) {
      pNode.left = node
    } else {
      pNode.right = node
    }
  }

  remove(num) {
    let p = this.root
    let prev = null

    let res = null
    while (1) {
      if (p.left) {
        if (num < p.left.value || num < p.value) {
          prev = p
          p = p.left
          continue
        }

        if (p.right) {
          if (num >= p.right.value || num >= p.value) {
            if (num === p.value) {
              this.delMethod(p, prev)
              if (prev === null) {
                p = this.root
              } else {
                p = prev.right
              }
              res = true
              continue
            }
            prev = p
            p = p.right
            continue
          }
        }
      }

      if (num === p.value) {
        res = true
        this.delMethod(p, prev)
      }

      return res
    }
  }

  find(num) {
    if (this.root === null) {
      return null
    }

    return this.getPrev(num, true)
  }

  // 前序遍历
  DLR() {}

  // 中序遍历
  LDR() {}

  // 后序遍历
  LRD() {}

  getPrev(num, isFind) {
    const p = this.root
    const res = []

    while (1) {
      if (p.left) {
        if (num < p.left.value || num < p.value) {
          p = p.left
          continue
        }
      }

      if (p.right) {
        if (num >= p.right.value || num >= p.value) {
          if (num === p.value) {
            res.push(p.value)
          }
          p = p.right
          continue
        }
      }

      if (isFind) {
        if (num === p.value) {
          res.push(p.value)
        }

        if (res.length === 0) {
          return null
        }

        if (res.length === 1) {
          return res[0]
        }

        return res
      }

      return p
    }
  }

  delMethod(p, prev) {
    // 要删除的节点有两个子节点
    if (p.left !== null && p.right !== null) {
      let minPP = p
      let minP = p.right
      // 查找右子树中最小节点
      while (minP.left !== null) {
        minPP = minP
        minP = minP.left
      }
      p.value = minP.value
      p = minP
      prev = minPP
    }

    // 删除节点是叶子节点或者仅有一个子节点
    let child
    if (p.left !== null) {
      child = p.left
    } else if (p.right !== null) {
      child = p.right
    } else {
      child = null
    }

    if (prev === null) {
      this.root = child
    } else if (prev.left === p) {
      p.left = child
    } else {
      p.right = child
    }
  }
}
