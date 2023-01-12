// 快速排序
// 快速排序的最坏运行情况是O(n²)，比如说顺序数列的快排。但它的平摊期望时间是O(n log n) ，且O(n log n)记号中隐含的常数因子很小，比复杂度稳定等于O(n log n)的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。

const quickSort = (arr, left, right) => {
  const len = arr.length
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1

  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
}

function partition(arr, left, right) {
  var pivot = left
  var index = left + 1

  for (let i = index; i <= right; i++) {
    if (arr[pivot] > arr[i]) {
      swap(arr, index, i)
      index++
    }
  }

  swap(arr, pivot, index - 1)

  return index - 1
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


// test
const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = quickSort(testArr)
console.log(res)
