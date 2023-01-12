// 计数排序
// 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
// 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

function countingSort(arr) {
  const max = findMax(arr)
  const counts = new Array(max + 1)

  arr.forEach(v => {
    if (counts[v]) {
      counts[v]++
    } else {
      counts[v] = 1
    }
  })

  let i = 0
  counts.forEach((count, v) => {
    while (counts > 0) {
      arr[i] = v
      i++
      count--
    }
  })

  return arr
}

function findMax(arr) {
  return Math.max(...arr)
}
