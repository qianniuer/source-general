// 什么是防抖？
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
// 防抖函数分为非立即执行版和立即执行版
// 思路：每次触发事件时都取消之前延时调用方法
// 1、非立即执行版: 触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
function debounce1(func, wait){
  let timeout;
  return function (){
    let context = this; // debounce 函数最终返回的函数 this 指向不变以及依旧能接受到 e 参数
    let args = arguments;
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(()=>{
      func.apply(context, args)
    }, wait)
  }
}

// 2、立即执行版: 触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
function debounce2(func, wait){
  let timeout;
  return function(){
    let context = this;
    let arg = arguments;
    if(timeout) clearTimeout(timeout)
    let callNow = !timeout;
    timeout = setTimeout(()=>{
      timeout = null
    },wait)
    if(callNow) func.apply(context, args)
  }
}
// 3、双剑合璧版
/**
 * 
 * @param {*} func 函数
 * @param {*} wait 延迟执行毫秒数
 * @param {*} immediate true表立即执行，false表非立即执行
 */
function debounce(func, wait,immediate){
  let timeout; // 创建一个标记用来存放定时器的返回值
  return function(){
    let context = this;
    let args = arguments;
    if(timeout) clearTimeout(timeout)  // 每当用户输入的时候把前一个 setTimeout clear 掉
    if(immediate){
      let callNow = !timeout;
      timeout = setTimeout(()=>{ // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        timeout = null
      },wait)
      if(callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(()=>{
        func.apply(context, args)
      },wait)
    }
  }
}