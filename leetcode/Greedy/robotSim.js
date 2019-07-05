// 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：
// -2：向左转 90 度
// -1：向右转 90 度
// 1 <= x <= 9：向前移动 x 个单位长度
// 在网格上有一些格子被视为障碍物。
// 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])
// 如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。
// 返回从原点到机器人的最大欧式距离的平方。

// 示例 1：
// 输入: commands = [4,-1,3], obstacles = []
// 输出: 25
// 解释: 机器人将会到达 (3, 4)

// 示例 2：
// 输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// 输出: 65
// 解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处

// 提示：
// 0 <= commands.length <= 10000
// 0 <= obstacles.length <= 10000
// -30000 <= obstacle[i][0] <= 30000
// -30000 <= obstacle[i][1] <= 30000
// 答案保证小于 2 ^ 31

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/walking-robot-simulation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * Math.pow(x,y) // x的y次幂
 * Math.sqrt(x)  // 算数平方根
 */
var robotSim = function(commands, obstacles) {
  let direction = 1; // 1N 2E 3S 4W
  let max_distance = 0;
  let current_station = [0, 0];
  const map_obstacles = current_station => {
    for (let i = 0; i < obstacles.length; i++) {
      if (
        current_station[0] == obstacles[i][0] &&
        current_station[1] == obstacles[i][1]
      )
        return false;
    }
    return true;
  };

  const trunDirection = num => {
    if (num == -1) direction == 4 ? (direction = 1) : direction++;
    if (num == -2) direction == 1 ? (direction = 4) : direction--;
  };
  const maxComputed = () => {
    max_distance = Math.max(
      max_distance,
      Math.pow(current_station[0], 2) + Math.pow(current_station[1], 2)
    );
  };

  commands.forEach((item, index) => {
    trunDirection(item);
    if (item == -1 || item == -2) return;
    switch (direction) {
      case 1:
        for (let i = 0; i < item; i++) {
          current_station[1]++;
          if (!map_obstacles(current_station)) {
            current_station[1]--;
          }
        }
        maxComputed();
        break;
      case 2:
        for (let i = 0; i < item; i++) {
          current_station[0]++;
          if (!map_obstacles(current_station)) {
            current_station[0]--;
          }
        }
        maxComputed();
        break;
      case 3:
        for (let i = 0; i < item; i++) {
          current_station[1]--;
          if (!map_obstacles(current_station)) {
            current_station[1]++;
          }
        }
        maxComputed();
        break;
      case 4:
        for (let i = 0; i < item; i++) {
          current_station[0]--;
          if (!map_obstacles(current_station)) {
            current_station[0]++;
          }
        }
        maxComputed();
        break;
      default:
        break;
    }
  });
  return max_distance;
};

let commands = [7, -2, -2, 7, 5],
  obstacles = [
    [-3, 2],
    [-2, 1],
    [0, 1],
    [-2, 4],
    [-1, 0],
    [-2, -3],
    [0, -3],
    [4, 4],
    [-3, 3],
    [2, 2]
  ];
console.log(robotSim(commands, obstacles));
