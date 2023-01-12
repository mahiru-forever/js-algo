// 桶排序
// 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
// 为了使桶排序更加高效，我们需要做到这两点：
// 1.在额外空间充足的情况下，尽量增大桶的数量
// 2.使用的映射函数能够将输入的N个数据均匀的分配到K个桶中

// 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

// 什么时候最快（Best Cases）：
// 当输入的数据可以均匀的分配到每一个桶中

// 什么时候最慢（Worst Cases）：
// 当输入的数据被分配到了同一个桶中


// 思路：
// 将数组中的数据，按桶进行划分，将相邻的数据划分在同一个桶中
// 每个桶用插入排序算法（或者快速排序）进行排序
// 最后整合每个桶中的数据
function bucketSort(arr, bucketSize = 5) {
  const buckets = createBuckets(arr, bucketSize)
  return sortBuckets(buckets)
}

function createBuckets(arr, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]

  // 遍历数组找到最大、最小值
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }

  // 根据最大、最小值、桶的大小，计算桶的个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1

  // 建立一个二维数组，将桶放入buckets中
  const buckets = new Array(bucketCount).fill([])

  // 计算每个值应该放在哪个桶中
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(arr[i])
  }

  return buckets
}

function sortBuckets(buckets) {
  const sortedArray = []

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length > 0) {
      quickSort(buckets[i])
      sortedArray.push(buckets[i])
    }
  }

  return sortedArray
}

// 快排（用插排也可以）
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}

function partition(arr, left, right) {
  const pivot = left
  let index = left + 1

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
