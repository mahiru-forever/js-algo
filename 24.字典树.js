// 字典树

class TrieNode {
  constructor(data) {
    this.data = data
    this.children = new Array(26)
    this.isEnd = false
  }
}

class TrieTree {
  constructor(data) {
    this.root = new TrieNode('/')
  }

  insert(text) {
    let node = this.root
    for (let char of text) {
      const index = char.charCodeAt() - 'a'.charCodeAt()
      if (!node.children[index]) {
        node.children[index] = new TrieNode(char)
      }
      node = node.children[index]
    }
    node.isEnd = true
  }

  find(text) {
    let node = this.root

    for (let char of text) {
      const index = char.charCodeAt() - 'a'.charCodeAt()
      if (node.children[index]) {
        node = node.children[index]
      } else {
        return false
      }
    }

    return node.isEnd
  }
}
