// 你现在是棒球比赛记录员。
// 给定一个字符串列表，每个字符串可以是以下四种类型之一：
// 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
// 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
// 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
// 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

// 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
// 你需要返回你在所有回合中得分的总和。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/baseball-game
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var num_arr = [];
    ops.forEach((item, index) => {
      if (item == "C") {
        num_arr.pop();
      } else {
        num_arr.push(item);
      }
    });
    var sum_arr = [];
    num_arr.forEach((item, index) => {
      if (item !== "D" && item !== "+") {
        sum_arr.push(item);
      }
      if (item == "D") {
        sum_arr.push(Number(sum_arr[index - 1]) * 2);
      }
      if (item == "+") {
        sum_arr.push(Number(sum_arr[index - 1]) + Number(sum_arr[index - 2]));
      }
    });
    var sum = 0;
    sum_arr.forEach(item => {
      sum += Number(item);
    });
    return sum;
};

var arr = ["5","2","C","D","+"];
console.log(calPoints(arr));