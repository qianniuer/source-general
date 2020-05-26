function Animal (type) {
  this.type = type; // 实例上的属性
  return 'dog' // return 普通值
  // return {name: '小狗'} // return 对象
}
Animal.prototype.say = function () {
  return 'say'
}

// 实现一个new
function mockNew() {
  // constructor => animal 剩余的arguments就是其他参数
  let Constructor = [].shift.call(arguments);
  let obj = {};
  obj.__proto__ = Constructor.prototype; // 原型上的方法
  let r = Constructor.apply(obj, arguments); 
  return r instanceof Object ? r : obj; // 判断返回值是普通值还是对象
}
// or
// function _new(fn, ...arg) {
//   const obj = Object.create(fn.prototype);
//   const ret = fn.apply(obj, arg);
//   return ret instanceof Object ? ret : obj;
// }

// let animal = new Animal('哺乳类'); // 正常使用new
let animal = mockNew(Animal, '哺乳类'); // 自己实现new

