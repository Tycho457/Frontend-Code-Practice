// 导致内存泄漏的相关例子

// 1、循环引用
function createObjects() {
    let objA = {};
    let objB = {};
  
    objA.someOtherObject = objB;
    objB.anotherObject = objA;
  
    return { objA, objB };
  }
  
  let { objA, objB } = createObjects();
  
  // 没有及时打破循环引用，垃圾回收机制就无法清除这些对象

  
// 2、定时器和回调函数
function doSomething(callback) {
    setInterval(() => {
      callback();
    }, 1000);
  }
  
  doSomething(() => {
    // Do something here
  });
  
  // 没有取消定时器或清除回调函数，它们将一直存在于内存中，直到页面关闭
  
// 3、DOM引用
let someElement = document.getElementById('some-element');

function doSomething() {
  // Keep a reference to someElement
  let elementReference = someElement;
  // Do something with elementReference
}

// 如果没有及时释放对某些 DOM 元素的引用，即使该元素已经从页面中删除，也会导致内存泄漏

// 4、闭包
function closureExample() {
    let bigArray = new Array(1000000).fill({});
    let outerVariable = 'Outer Variable';
  
    return function innerFunction() {
      console.log(outerVariable);
      // Do something with bigArray
    };
  }
  
  let innerFunc = closureExample();
  
  // 如果您创建了一个很大的闭包并在其中保留了对某些变量的引用，则可能会导致内存泄漏
  