// 深拷贝
function deepClone(obj, hash = new WeakMap()) { // WeakMap只接受对象作为键名 null除外.WeakMap 的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
    // WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。
    // 如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap
    if(obj == null) return obj // if null|undefind 不进行拷贝
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    // 如果是对象 | 普通的值 进行拷贝。函数的话不需要拷贝，函数直接调用
    if(typeof obj !== 'object') return obj
    if(hash.get(obj)) return hash.get(obj) // 为了避免同一对象被无限循环调用
    // 根据obj克隆的类型 定义不同的初始空值
    let cloneObj = new obj.constructor; // 此句等同于 [] {} Object.prototype.toString.call(obj) == [object Array] ? [] : {}
    hash.set(obj, cloneObj)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 实现一个递归
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return obj;
}
let a = { 
    zhangsan: {
        age: 18,
        iphone: 123232,
        address: {
            name: '北京'
        }
    }
 }
let b = deepClone(a)
console.log(b)
