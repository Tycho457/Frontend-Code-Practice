function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      // 如果是 null 或者不是对象类型，则直接返回原始值
      return obj;
    }
  
    let copy;
  
    // 判断当前对象是否是数组类型
    if (Array.isArray(obj)) {
      copy = [];
  
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepClone(obj[i]);
      }
    } else {
      // 如果是普通对象类型，则创建一个空对象
      copy = {};
  
      // 遍历对象的每一个属性进行复制
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = deepClone(obj[key]);
        }
      }
    }
  
    return copy;
  }
  