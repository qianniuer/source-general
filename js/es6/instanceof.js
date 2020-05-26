// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
// 实现instanceof A左表达式 B右表达式
// 规则简单来说就是 A的  __proto__  是不是强等于 B.prototype，不等于再找  A.__proto__ .__proto__  直到 __proto__ 为 null  
function mockInstanceof(A, B) {
  A = A.__proto__ 
  B = B.prototype
  while (true) {
    if(A === null){
      return false
    }
    if(A === B){ // 这里重点：当 A 严格等于 B 时，返回 true
      return true
    }
    A = A.__proto__
  }
}
function A () {
  
}
let a = new A()
console.log(mockInstanceof(a,A))


// string instanceof类型检测会报错 -> 检查原型链会找到 undefined



// Symbol.hasInstance用于判断某对象是否为某构造器的实例。可以用它自定义 instanceof 操作符在某个类上的行为
class MyArray {
  static [Symbol.hasInstance](item){
    return Array.isArray(item)
  }
}
console.log([] instanceof MyArray)