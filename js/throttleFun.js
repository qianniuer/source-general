// 节流：指连续处罚事件但是在 n 秒中只执行一次函数，节流会稀释函数的执行频率。
// 对于节流一般有两种方式可以实现，分别是时间戳版和定时器版
// 1、时间戳版
function throttle1(func, wait){
  let previous = 0;
  return function(){
    let now = +new Date();
    let context = this;
    let args = arguments;
    let remaining = wait - (now - previous)
    if(remaining <= 0 || remaining > wait){
      func.apply(context, args);
      previous = now
    }
  }
}
// 2、定时器版
function throttle2(func, wait){
  let timeout;
  return function(){
    let context = this;
    let args = arguments;
    if(!timeout){
      timeout = setTimeout(()=>{
        timeout = null;
        func.apply(context, args)
      },wait)
    }
  }
}
// 这两种的区别是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。
// 3、双剑合璧版
/**
 * 
 * @param {*} func 函数
 * @param {*} wait 延迟执行毫秒数
 * @param {*} type 1表示时间戳版 2表示定时器版
 */
function throttle(func, wait, type){
  if(type == 1){
    let previous = 0
  } else if(type == 2) {
    let timeout;
  }
  return function(){
    let context = this;
    let args = arguments;
    if(type == 1){
      let now = +new Date();
      //下次触发 func 剩余的时间
      let remaining = wait - (now - previous)
      // 如果没有剩余的时间了或者你改了系统时间
      if(remaining <= 0 || remaining > wait){
        func.apply(context, args);
        previous = now
      }
    } else if(type == 2) {
      if(!timeout){
        timeout = setTimeout(()=>{
          timeout = null;
          func.apply(context, args)
        },wait)
      }
    }
  }
}
