  // 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  // 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
  
  // 粗鲁的方法
  // var twoSum = function(nums, target) {
  //   for (var i = 0; i < nums.length; i++) {
  //     for (var j = 1; j < nums.length; j++) {
  //      if (nums[i] + nums[j] == target && j !== i) {
  //        return [i, j];
  //      }
  //     }
  //   }
  // };
  
  // 算法优化
  var twoSum = function(nums, target) {
    nums = nums.sort((a, b) => {
      return a > b
    });
    var i = 0;
    var j = nums.length;
    function sortNums() {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
      if (nums[i] + nums[j] > target){
        j-- < 0 ? j: j--;
        sortNums();
      }
      if (nums[i] + nums[j] < target){
        i++ > nums.length ? i : i++;
        sortNums();
      }
    }
    sortNums();
  };
  var sum = twoSum([2, 5, 5, 11], 10);