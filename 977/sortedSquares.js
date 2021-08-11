/**
 *  * Created by Zhourundong on 2021-08-10.
 */

/**
 * 双指针查找
 * 两个指针分别指向最左和最右
 * 指针重合时，结束
 * @param nums
 */
const sortedSquares = (nums) => {
  const length = nums.length;
  const newArr = new Array(length);
  for (let i = 0, j = length - 1, pos = j; i <= j;) {
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      newArr[pos] = nums[j] * nums[j];
      j--;
    } else {
      newArr[pos] =  nums[i] * nums[i];
      i++;
    }
    pos--;
  }
  return newArr;
}

/**
 * 双指针查找
 * 找到数组中最大的非负数, nums[negative] < 0, nums[negative + 1] > 0
 * 设置两个下标，分别指向 negative 及 negative+1
 * 根据各自大小，将小的数组放入新数组，同时向左或向右移动下标
 * @param nums
 */
const sortedSquares1 = (nums) => {
  const length = nums.length;
  let negative = -1;
  // 获取negative 下标
  for (let i = 0 ; i < length; i++) {
    if (nums[i] >= 0) {
      break;
    }
    negative = i;
  }

  const newArr = new Array(length);
  let index =0;
  let i = negative;
  let j = negative + 1;
  while (i >= 0 || j < length) {
    if (i < 0) {
      // 全部是非负数
      newArr[index] = nums[j] * nums[j];
      j++;
    } else if (j === length) {
      // 全部为负数
      newArr[index] = nums[i] * nums[i];
      i--;
    } else if (Math.abs(nums[i]) <= nums[j]) {
      newArr[index] = nums[i] * nums[i];
      i--;
    } else if (Math.abs(nums[i]) > nums[j]) {
      newArr[index] = nums[j] * nums[j];
      j++;
    }
    index++;
  }
  return newArr;
}

// [-3, -2, -1] i = 2, j =3
// 1, 1, 4, 9, 36

const arr = [-4,-2, -1];
const arr1 = [1,2, 3];
const arr2 = [-5, -4, -2, -1, 0, 1, 2, 6];
console.log(sortedSquares(arr2));
