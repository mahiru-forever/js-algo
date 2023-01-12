// 归并排序

const mergeSort = (arr) => {
  const len = arr.length
  if (len < 2) {
    return arr
  }

  const mid = len / 2
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let temp = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      temp.push(right[rightIndex])
      rightIndex++
    } else {
      temp.push(left[leftIndex])
      leftIndex++
    }
  }

  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = mergeSort(testArr)
console.log(res)
