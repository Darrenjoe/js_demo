// 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/next-greater-element-i
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var arr = [];
    nums1.forEach((item, index) => {
      var num_slice = nums2.slice(nums2.indexOf(item) + 1);
      if (num_slice.length) {
        var num_arr = [];
        num_slice.forEach((item2) => {
          if (item2 > item) {
            num_arr.push(item2);
          }
        });
      };
      num_arr.length ? arr.push(num_arr[0]) : arr.push(-1);
    })
    return arr;
};
var nums1 = [1,3,5,2,4];
var nums2 = [6,5,4,3,2,1,7];
console.log(nextGreaterElement(nums1, nums2));