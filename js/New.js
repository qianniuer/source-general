// new 实现的原理
// 1、创建一个空对象，构造函数中的this指向这个空对象
// 2、这个新对象被执行[[原型]]连接
// 3、执行构造函数方法，属性和方法被添加到this引用的对象中
// 4、如果构造函数中没有返回其他对象，那么返回this，即创建的这个新对象，否则，返回构造函数中返回的对象
export function _new() {
    let target = {}; // 创建新对象
    // 执行[[原型]]连接，target 是 constructor 实例
    let [constructor, ...args] = [...arguments]

}
