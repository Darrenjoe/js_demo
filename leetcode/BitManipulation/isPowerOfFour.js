// 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
// 示例 1:
// 输入: 16
// 输出: true

// 示例 2:
// 输入: 5
// 输出: false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/power-of-four
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} num
 * @return {boolean}
 * 4的次方数都是100+的结构
 */
var isPowerOfFour = function(num) {
  let n = 4;
  if (num == 1 || num == 4) return true;
  if (num <= 4) return false;
  let i = 1;
  while (n < num) {
    n = Math.pow(4, i);
    if (n == num) return true;
    if (n > num) return false;
    i++;
  }
};
let num = 16;
console.log(isPowerOfFour(num));
