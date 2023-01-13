/**
 * 二分查找
 *
 */

// 数组必须有序 不存在重复
function biaryFind(sortedArray, target) {
  if (sortedArray.length === 0) {
    return
  }

  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target === sortedArray[mid]) {
      return mid
    } else if (target < sortedArray[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

