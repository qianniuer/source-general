// Set 类似于数组，成员的值是唯一的。它本身是一个构造函数，用来生成 Set 数据结构
// 1、方法一：数组去重
const s = new Set()
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x))
for(let i of s){
  console.log(i) // 2 3 5 4
} 
// Set 方法
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数
// Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
// Set.prototype.clear()：清除所有成员，没有返回值。

// Array.form 方法可以将 Set 结构转为数组
const items = new Set([1,2,3,4,5])
const array = Array.form(items)
// 2、方法二：数组去重
function dedupe(arr){
  return Array.form(new Set(array))
}
dedupe([1,2,1,3]) //[1,2,3]
// Set 遍历
// Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员

// Set的遍历顺序就是插入顺序。比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用
let set = new Set(['red', 'green', 'blue'])
for(let item of set.keys()){
  console.log(item)
}
// red
// green
// blue

for(let item of set.values()){
  console.log(item)
}
// red
// green
// blue

for(let item of set.entries()){ // entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等
  console.log(item)
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// 3、方法三：数组去重（扩展运算符和 Set 结构相结合）
let arr = [3, 5, 2, 2, 5, 5]
let unique = [...new Set(arr)] // [3, 5, 2]




// 如果想在遍历操作中，同步改变原来的 Set 结构.
// 一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；
// 另一种是利用Array.from方法。
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
