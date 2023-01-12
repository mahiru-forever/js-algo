// 选择排序
// 在时间复杂度上表现最稳定的排序算法之一，因为无论什么数据进去都是O(n²)的时间复杂度。。。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。
// 从左往右每次选出最小的一个数交换位置

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j
      }
    }

    const temp = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = temp
  }

  return arr
}