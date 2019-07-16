// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
// 你可以返回任何满足上述条件的数组作为答案。

// 示例：
// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let odd = [];
  let even = [];
  let result = [];
  A.forEach(item => {
    if (item % 2 == 0) even.push(item);
    else odd.push(item);
  });
  for (let i = 0, len = A.length / 2; i < len; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }
  return result;
};

let A = [4, 2, 5, 7];
console.log(sortArrayByParityII(A));