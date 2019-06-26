// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
// 示例 1：

// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：

// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/backspace-string-compare
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let formatString = string => {
    let str = string.split("");
    let arr = [];
    str.forEach(item => {
      if (item !== "#") arr.push(item);
      if (item == "#" && arr.length > 0) arr.pop();
    });
    return arr.join("");
  };
  console.log(formatString(S));
  console.log(formatString(T));
  if (formatString(S) == formatString(T)) return true;
  return false;
};

let [S, T] = ["y#fo##f", "y#f#o##f"];
console.log(backspaceCompare(S, T));
