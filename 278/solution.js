/**
 *  * Created by Zhourundong on 2021-08-10.
 */
const isBadVersion = (version) => {
  return version >= 1;
}
/**
 *  给定一个数字n, 通过isBadVersion找出其中的临界点
 *  必定存在m， isBadVersion(m-1) = false, isBadVersion(m) = true
 * @param n
 * @returns {number}
 */
const solution = (n) => {
  let left = 0;
  let right = n;
  while (left <=  right) {
    let mid = left + Math.floor((right - left) / 2);
    if (right - left === 1) {
      return right;
    }
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid;
    }
    mid = left + Math.floor((right - left) / 2);
  }
}

console.log(solution(1));
