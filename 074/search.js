/**
 *  * Created by Zhourundong on 2021-08-09.
 */
const nums = [-1,0,3,5,9,12,21];
const target = 5;

/**
 * 二分查找
 * 每次从数组的mid(=(left+right)/2)与target进行判断，
 * 如果target>mid, 此时应从mid之后一位的元素开始比较，因此left=mid+1
 * 同理, 如果target<mid, 此时应从mid之前一位的元素开始比较, right=mid-1;
 * 当target在给定的数组中，迟早会命中
 * 当target不再给定的数组中(target<nums[0]):
 * left=0, right=1 -> left=0, right=0 -> left=0, right=-1
 * left<=right返回false，return -1
 *
 * @param nums
 * @param target
 * @returns {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}


console.log(search(nums, target));
