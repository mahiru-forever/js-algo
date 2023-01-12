// 基数排序
// 基数排序有两种方法：

// MSD 从高位开始进行排序
// LSD 从低位开始进行排序
// 基数排序 vs 计数排序 vs 桶排序
// 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：
// 基数排序：根据键值的每位数字来分配桶
// 计数排序：每个桶只存储单一键值
// 桶排序：每个桶存储一定范围的数值

function radixSort(arr) {
  const counts = []
  let max = Math.max(...arr)
  let countNum = 1
  while (max >= 1) {
    max = max / 10
    countNum++
  }

  let high = 10
  let low = 1
  for (let i = 0; i < countNum; i++) {
    for (let j = 0; j < arr.length; j++) {
      const bucket = Math.floor(arr[j] % high / low)
      if (!counts[bucket]) {
        counts[bucket] = []
      }
      counts[bucket].push(arr[j])
    }
    
    let pos = 0
    for (let j = 0; j < counts.length; j++) {
      if (counts[j]) {
        while (counts[j].length > 0) {
          arr[pos++] = counts[j].shift()
        }
      }
    }

    high *= 10
    low *= 10
  }

  return arr
}


// test
const testArr = []
let i = 0
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

const res = radixSort(testArr)
console.log(res)

