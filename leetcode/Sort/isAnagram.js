// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-anagram
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s_arr = s.split("");
  let t_arr = t.split("");
  let result = true;
  if (s_arr.length !== t_arr.length) return false;
  s_arr.forEach(item => {
    for (let i = 0; i < t_arr.length; i++) {
      if (item == t_arr[i]) {
        t_arr.splice(i, 1);
        break;
      }
      if (i == t_arr.length - 1) result = false;
    }
  });
  return result;
};

let s = "aacc",
  t = "ccac";
console.log(isAnagram(s, t));
