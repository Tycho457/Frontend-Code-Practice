// 节流：一段时间内只取一次操作
function throttle(func, delay) {
    let lastTime = 0;
  
    return function (...args) {
      const context = this;
      const currentTime = new Date().getTime();
  
      if (currentTime - lastTime >= delay) {
        func.apply(context, args);
        lastTime = currentTime;
      }
    };
  }

  const throttledFunc = throttle(function() {
    console.log('throttled');
  }, 1000);
  
  window.addEventListener('scroll', throttledFunc);
  
