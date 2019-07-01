// 有一堆石头，每块石头的重量都是正整数。
// 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

// 提示：

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/last-stone-weight
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // 排序方法
  let sortStones = arr => {
    return arr.sort((a, b) => {
      return b - a;
    });
  };
  // 粉碎方法
  let hitStones = arr => {
    return Number(arr[0] - arr[1]);
  };
  // 条件循环
  while (stones.length > 1) {
    sortStones(stones);
    let hit_val = hitStones(stones);
    stones.splice(0, 2);
    stones.push(hit_val);
  }
  if ((stones.length = 1)) return stones[0];
  return 0;
};

var x = [7, 6, 7, 6, 9];
console.log(lastStoneWeight(x));
