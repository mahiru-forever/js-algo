// 冒泡排序
// 选出最大的放到数组最后
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

const test = [4, 5, 6, 3, 2, 1]
console.log(bubbleSort(test))
