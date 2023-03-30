// 防抖：多次操作取最后一次
function debounce(func,delay){
    let timer = null;
    return function(...args) {
        const context = this;
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func.apply(context,args);
        },delay)
    }
}

const debouncedFunc = debounce(function() {
    console.log('debounced');
  }, 1000);
  
  window.addEventListener('scroll', debouncedFunc);
  