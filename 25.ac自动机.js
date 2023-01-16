// // ac 自动机

const MAX_LEN = 128

class ACNode {
  constructor(data) {
    this.data = data
    this.children = new Array(MAX_LEN)
    this.isEnd = false
    this.length = 0
    this.fail = null
  }
}

class ACTree {
  constructor() {
    this.root = new ACNode('/')
  }

  insert(text) {
    let node = this.root

    for (let char of text) {
      const index = char.charCodeAt() + 1
      if (!node.children[index]) {
        node.children[index] = new ACNode(char)
      }
      node = node.children[index]
    }

    node.isEnd = true
    node.length = text.length
  }

  buildFailurePointer() {
    const root = this.root
    let queue = []
    queue.push(root)

    while (queue.length > 0) {
      let p = queue.shift()

      for (let i = 0; i < MAX_LEN; i++) {
        let pChild = p.children[i]
        if (!pChild) {
          continue
        }

        if (p === root) {
          pChild.fail = root
        } else {
          let q = p.fail
          while (q) {
            let qChild = q.children[pChild.charCodeAt() + 1]
            if (qChild) {
              pChild.fail = qChild
              break
            }
            q = q.fail
          }
          if (!q) {
            pChild.fail = root
          }
        }

        queue.push(pChild)
      }
    }
  }

  match(text) {}
}


let automata = new ACTree();
let patterns = ["at", "art", "oars", "soar"];
for (let pattern of patterns) {
    automata.insert(pattern);
}

automata.buildFailurePointer()
// automata.match("soarsoars");
