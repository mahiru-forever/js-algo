// 希尔排序
// 希尔排序是插入排序的一种更高效率的实现。它与插入排序的不同之处在于，它会优先比较距离较远的元素。
// 希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列

// 间隔 gap 通常为总长度的一半左右，下次的间隔为上一次的间隔减半
// 每一趟采用插入排序

function shellSort(arr) {
  var len = arr.length
  var temp
  var gap = Math.floor(arr.length / 2)

  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    // 插入排序
    // i = gap 从第二个开始拍
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      // 默认第一个是有序的
      for (var j = i - gap; j > 0 && temp < arr[j]; j -= gap) {
        // 将前面的元素往后移
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }

  return arr
}

console.log(shellSort([3,23,542,12,55,15,7]))

