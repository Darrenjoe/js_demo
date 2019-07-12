// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
// 如果不能形成任何面积不为零的三角形，返回 0。

// 示例 1：
// 输入：[2,1,2]
// 输出：5

// 示例 2：
// 输入：[1,2,1]
// 输出：0

// 示例 3：
// 输入：[3,2,3,4]
// 输出：10

// 示例 4：
// 输入：[3,6,2,3]
// 输出：8

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/largest-perimeter-triangle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} A
 * @return {number}
 * 满足条件 a < b < c,c已知，则a+b>c即可
 */
var largestPerimeter = function(A) {
  let arr = A.sort((a, b) => {
    return b - a;
  });
  for (let i = 0, len = arr.length - 2; i < len; i++) {
    if (arr[i + 1] + arr[i + 2] > arr[i]) {
      return arr[i] + arr[i + 1] + arr[i + 2];
    }
  }
  return 0;
};
let A = [3, 6, 2, 3];
console.log(largestPerimeter(A));
