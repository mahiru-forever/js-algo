// 插入排序
// 将当前值放入前方合适位置（类似扑克理牌）

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        arr[j + 1] = temp
        break
      }
    }
  }

  return arr
}
