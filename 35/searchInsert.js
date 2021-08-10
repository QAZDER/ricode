/**
 *  * Created by Zhourundong on 2021-08-10.
 */
/**
 * 给定一个数查找在有序数组中的位置
 * 如果不存在，则返回该数插入到数组后对应的位置
 * @param nums
 * @param target
 * @returns {number|*}
 */
const searchInsert = (nums, target) => {
  let left = 0, right = nums.length - 1;
  let mid;
  if (target < nums[0]) return 0;
  if (target > nums[right]) return nums.length;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = left + Math.floor((right - left) / 2);
  }
  return left;
}

const nums = [1,3];
const target = 2;

console.log(searchInsert(nums, target));
