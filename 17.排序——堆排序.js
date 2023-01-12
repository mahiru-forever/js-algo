// 堆排序
// 堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

// 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列
// 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列


// 顶堆下标计算
// 下标为 i 的节点
// 父节点： Math.floor((i - 1) / 2)
// 左孩子： i * 2 + 1
// 右孩子： i * 2 + 2

function heapSort(arr) {
  let len = arr.length

  // 建堆
  buildMaxHeap(arr, len)

  // 排序
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    len--
    heapify(arr, 0, len)
  }

  return arr
}

// 建立大顶堆
// 从最后一个有孩子节点的堆开始
function buildMaxHeap(arr, len) {
  for (var i = Math.floor((len - 2) / 2); i >= 0; i--) {
    heapify(arr, i, len)
  }
}

// 维护堆的性质(父节点 大于 子节点)
function heapify(arr, i, len) {
  const left = i * 2 + 1
  const right = i * 2 + 2
  let largest = i

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if (i !== largest) {
    swap(arr, i, largest)
    heapify(arr, largest, len)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(heapSort([4, 25, 11, 1, 66, 30, 21, 22, 90, 1]))

