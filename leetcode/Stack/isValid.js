// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  var arr = s.split("");
  arr = arr.filter((x) => {
    if (x.trim()) {
      return x;
    }
  });
  if (arr.length % 2 != 0) {
    return false;
  }
  var formatArr = [];
  var brackets = ['{', '}', '[', ']', '(', ')'];
  function markName(val) {
    if (val == "{" || val == "[" || val == "(") {
      return 1;
    } else {
      return -1;
    }
  }
  var flag = true;
  arr.forEach((item, index) => {
    if (markName(item) > 0) {
      formatArr.push(item);
      flag = true;
    } else if (formatArr.length <= 0) {
      flag = false;
    } else if (brackets[brackets.indexOf(item) - 1] == formatArr[formatArr.length - 1]) {
      formatArr.pop();
    } else {
      flag = false;
    }
  })
  if (formatArr.length) {
    return false;
  }
  return flag;
};
var value = isValid("((");
console.log(value);