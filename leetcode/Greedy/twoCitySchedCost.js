// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。
// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。

// 示例：
// 输入：[[10,20],[30,200],[400,50],[30,20]]
// 输出：110
// 解释：
// 第一个人去 A 市，费用为 10。
// 第二个人去 A 市，费用为 30。
// 第三个人去 B 市，费用为 50。
// 第四个人去 B 市，费用为 20。
// 最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。

// 提示：
// 1 <= costs.length <= 100
// costs.length 为偶数
// 1 <= costs[i][0], costs[i][1] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-city-scheduling
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let difference = new Array();
  let len = costs.length / 2;
  let sum = 0;
  let count = 0;
  costs.forEach(item => {
    difference.push(item[1] - item[0]);
  });
  difference.sort((a, b) => a - b);
  difference.forEach(item => {
    for (let i = 0; i < costs.length; i++) {
      if (costs[i][1] - costs[i][0] == item) {
        if (count < len) {
          sum += costs[i][1];
          count++;
        } else {
          sum += costs[i][0];
        }
        costs.splice(i, 1);
        break;
      }
    }
  });
  return sum;
};
let x = [
  [945, 563],
  [598, 753],
  [558, 341],
  [372, 54],
  [39, 522],
  [249, 459],
  [536, 264],
  [491, 125],
  [367, 118],
  [34, 665],
  [472, 410],
  [109, 995],
  [147, 436],
  [814, 112],
  [45, 545],
  [561, 308],
  [491, 504],
  [113, 548],
  [626, 104],
  [556, 206],
  [538, 592],
  [250, 460],
  [718, 134],
  [809, 221],
  [893, 641],
  [404, 964],
  [980, 751],
  [111, 935]
];
console.log(twoCitySchedCost(x));
