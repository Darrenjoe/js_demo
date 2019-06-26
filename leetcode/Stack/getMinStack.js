// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/min-stack
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1];
  }
  return '';
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  var min = this.stack[0];
  this.stack.forEach((item, index) => {
    if (min >= item) min = item;
  })
  return min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/