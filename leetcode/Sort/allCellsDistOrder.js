// 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。
// 另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。
// 返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）

// 示例 1：
// 输入：R = 1, C = 2, r0 = 0, c0 = 0
// 输出：[[0,0],[0,1]]
// 解释：从 (r0, c0) 到其他单元格的距离为：[0,1]

// 示例 2：
// 输入：R = 2, C = 2, r0 = 0, c0 = 1
// 输出：[[0,1],[0,0],[1,1],[1,0]]
// 解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]
// [[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案。

// 示例 3：
// 输入：R = 2, C = 3, r0 = 1, c0 = 2
// 输出：[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
// 解释：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2,2,3]
// 其他满足题目要求的答案也会被视为正确，例如 [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/matrix-cells-in-distance-order
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 * Math.abs(number) 获取绝对值
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let current_coor = [];
  let current_dist = [];
  let result = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      current_coor.push([i, j]);
    }
  }
  current_coor.forEach((item, index) => {
    let num = Math.abs(item[0] - r0) + Math.abs(item[1] - c0);
    current_dist.push([num, index]);
  });
  current_dist.sort((a, b) => {
    return a[0] - b[0];
  });
  current_dist.forEach(item => {
    result.push(current_coor[item[1]]);
  });
  return result;
};
let R = 2,
  C = 3,
  r0 = 1,
  c0 = 2;
console.log(allCellsDistOrder(R, C, r0, c0));
