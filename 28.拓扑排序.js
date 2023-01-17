// topological sorting
// 前提：有向无环图

function Graph(params) {
  var graph = {
    adj: new Map(),
    addEdge: function(from, to) {
      if (this.adj.get(from)) {
        this.adj.get(from).push(to)
      } else {
        this.adj.set(from, [to])
      }
    },
    sortingByDsf: function() {
      var inverseAdj = new Map()
      var keys = this.adj.keys()
      for (let key of keys) {
        let blk = this.adj.get(key)
        if (blk) {
          for (let v of blk) {
            if (!inverseAdj.get(v)) {
              inverseAdj.set(v, [key])
            } else {
              inverseAdj.get(v).push(key)
            }
          }
        }
      }

      const inKeys = inverseAdj.keys()
      const vertexes = new Set([...keys, ...inKeys])
      const visited = []
      for (let vertex of vertexes) {
        if (!visited.includes(vertex)) {
          visited.push(vertex)
          this.dsf(vertex, inverseAdj, visited)
        }
      }
    },
    dsf: function(vertex, inverseAdj, visited) {
      if (!inverseAdj.get(vertex)) {
        inverseAdj.set(vertex, [])
      }

      for (let v of inverseAdj.get(vertex)) {
        if (visited.includes(v)) {
          continue
        }

        visited.push(v)

        this.dsf(v, inverseAdj, visited)
      }

      console.log('->' + vertex)
    }
  }

  return graph
}

var dag = new Graph();
dag.addEdge(2, 1);
dag.addEdge(3, 2);
dag.addEdge(2, 4);
dag.addEdge(4, 1);
dag.sortingByDsf();
