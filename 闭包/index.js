// 闭包示例
function outFunction(){
    var outerVar = 'Hello';
    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}

var inner = outerFunction();
inner();

// 应用场景

// 1、封装变量和函数
function createCounter() {
    let count = 0;  // 变量被封装在函数作用域内
  
    function increment() {
      count++;  // 变量只能通过内部函数来修改
    }
  
    function getCount() {
      return count;  // 变量只能通过内部函数来访问
    }
  
    return { increment, getCount };  // 对外暴露的接口
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // 输出 1
  
// 2、延迟执行
function delay(func, time){
    return function() {
        setTimeout(func, time);
    };
}

function sayHello(){
    console("hello")
}

const delayHello = delay(sayHello, 1000)
delayHello();