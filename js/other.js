// 1、将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
// Array.from() 方法从一个类数组或可迭代对象中创建一个新的，浅拷贝的数组实例
// Array.from(new Set(arr.flat())).sort((a,b)=> a-b)

// 例如
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
console.log(Array.from(new Set(arr.flat(4))).sort((a,b) => a-b))

// 隐式转换
console.log([] == ![]) // true 单目运算优先级最高
// [] == false
// [] == 0 [].valuOf() --> []  // valueOf() 方法可返回 Boolean 对象的原始值
// [] == 0 [].toString() --> ''
// '' == 0
// 0 == 0


// 对象和数字 字符串 symbol 比较的时候 会把对象转成原始数据类型
console.log({} == '[object Object]') // true