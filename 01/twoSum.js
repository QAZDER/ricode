/**
 *  * Created by Zhourundong on 2021-08-09.
 */
const arr = [11, 1, 2, 20, 15, 8 ,21, 19];
const sum = 30;

/**
 * 将{ nums[i]: i } 存到对象中, 缩短获取 target-nums[i] 这一过程，从obj中获取对应的键值
 * @param nums
 * @param target
 * @returns {[number, number]|[*, number]}
 */
const twoSum = (nums, target) => {
  const obj = {};
  const length = nums.length;
  for (let i = 0; i < length; i++ ) {
    const reduce = target - nums[i];
    if (obj.hasOwnProperty(reduce)) {
      return [obj[reduce], i];
    }
    obj[`${nums[i]}`] = i;
  }
  return [-1, -1];
}
