// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]

// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]

// 说明：
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  let max_nums = [];
  let min_nums = [];
  if (nums1.length < nums2.length) {
    max_nums = nums2;
    min_nums = nums1;
  } else {
    max_nums = nums1;
    min_nums = nums2;
  }
  max_nums.forEach(item => {
    if (min_nums.indexOf(item) !== -1) {
      result.push(item);
      min_nums.splice(min_nums.indexOf(item), 1);
    }
  });
  return result;
};

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
