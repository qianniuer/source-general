// WeakSet 结构与 Set 类似，也是不重复的值的集合
// 区别：1、WeakSet 的成员只能是对象，而不能是其他类型的值
const ws = new WeakSet();
ws.add(1);
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
// 上面报错，因为 WeakSet 只能放置对象。


// WeakSet 里面的引用，都不计入垃圾回收机制。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
// 由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历

const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);// 是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象
// WeakSet {[1, 2], [3, 4]}

const b = [3, 4];
const ws = new WeakSet(b); // 数组b的成员不是对象，加入 WeaKSet 就会报错。
// Uncaught TypeError: Invalid value used in weak set(…)


// 方法：
// WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
// WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
// WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。



// WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。如下
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}