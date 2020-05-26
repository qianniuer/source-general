/**
 * ajax 可以接受什么信息？
 * 
 * 浏览器可以接收的ajax都可以接收。如 html、css、json....
 * http请求方式：post、get、put、heade、delete、options、trace Connect
 * 
 * ajax 对象成员：
 * 属性成员：
 * 1、responseText：以字符串形式接受服务端返回的信息
 * 2、readyState ajax对象的状态。xhr.readyState == 4 表示数据接受完毕 
 * 
 * 0 创建完成
 * 1 已经调用open方法
 * 2 已经调用send方法
 * 3 数据已经返回一部分
 * 4 数据返回完毕
 * 
 * Onreadystatechange：事件属性。事件监听 属于事件on 用来判断readyState的状态值，判断数据是否已经接受完毕
 * 
 * 方法成员：
 * open() 创建一个http请求
 * send() 把http请求发送给服务端
 * 
 * 
 * ajax对象.open(get/post, 请求地址);
 * 
 */



// GET 请求
export function get(){
    let val = document.getElementById('username').value;
    // 对特殊字符串进行处理
    val = encodeURIComponent(val)

    // 1. 创建对象
    let xhr = new XMLHttpRequest();

    // 4. 设置时间。监听readyState状态，获取服务器返回信息
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
        alert(xhr.responseText); // 返回数据
        }

        // 2. 创建新的http请求
        xhr.open('get', './03.php?id='+val);
        // 3. 发送请求
        xhr.send(null)
    }
}

// POST 请求

export function post(){
    let val = document.getElementById('username').value;
    // 对特殊字符串进行处理
    val = encodeURIComponent(val)

    // 1. 创建对象
    let xhr = new XMLHttpRequest();

    // 把需要的信息转化为字符串格式
    let info = 'name'+val+'&ag=20'
    // 4. 设置时间。监听readyState状态，获取服务器返回信息
    xhr.onreadystatechange= function(){
        if(xhr.readyState === 4){
            alert(xhr.responseText) // 返回数据
        }
        // 2. 创建http请求
        // post 方式传递数据是模拟form表单方式传递的数据
        xhr.open('get','./04.php?color=red')
        // 设置http头协议，把传递的post数据转化为xml格式
        // setRequestHearder方法必须放在open方法的后边调用
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        // 3. 发送请求
        xhr.send(info)
    }
}

/**
 * ajax 对缓存的处理
 * 动态程序文件避免缓存效果： 
    ① 保证每次请求都是不同的请求 [推荐使用] 
    ② 设置header头禁止浏览器缓存当前的动态页面

    方法一、请求地址后面添加随机数 +Math.random(); 
    方法二、 在服务气端(php)设置响应头 
    //设置header头,禁止浏览器缓存当前页面 
    header('Cache-Control:no-cache'); 
    header('Pragma:no-cache'); 
    header('Expires:-1');

 */