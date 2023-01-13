/**
 * 二分查找
 *
 */

// 查找第一个等于给定值
const biaryFindFirst = (sortedArray, target) => {
  if (sortedArray.length === 0) {
    return -1
  }

  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target > arr[mid]) {
      low = mid + 1
    } else if (target < arr[mid]) {
      high = mid - 1
    } else {
      if (mid === 0 || sortedArray[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    }
  }

  return -1
}

// 查找最后一个相等的数
const biaryFindLast = (sortedArray, target) => {
  if (sortedArray.length === 0) {
    return -1
  }

  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (target > sortedArray[mid]) {
      low = mid + 1
    } else if (target < sortedArray[mid]) {
      high = mid - 1
    } else {
      if (mid === sortedArray.length - 1 || sortedArray[mid + 1] > target) {
        return mid
      }
      low = mid + 1
    }
  }

  return -1
}

// 查找第一个大于等于给定值的元素
const biaryFindFirstGTE = (sortedArray, target) => {
  if (sortedArray.length === 0) {
    return -1
  }

  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target <= sortedArray[mid]) {
      if (mid === 0 || sortedArray[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

// 查找最后一个小于等于给定值的元素
const biaryFindLastLTE = (sortedArray, target) => {
  if (sortedArray.length === 0) {
    return -1
  }

  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target >= sortedArray[mid]) {
      if (mid === sortedArray.length - 1 || sortedArray[mid + 1] > target) {
        return mid
      }
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}
