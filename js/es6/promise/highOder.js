// 函数返回函数 柯理化函数 偏函数。。
// 判断内容的类型
 function isType(type){
     return function(content){
        let isValue = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'')
        return type === isValue
     }
 }
 let type = ['String','Object','Undefind','Null'];
 let objs = {};
 type.forEach(item => {
     objs['is'+ item] = isType(item)
 });
 
// let isString = isType('String');
// let result = isString('hello')
console.log(objs.isString('11'))