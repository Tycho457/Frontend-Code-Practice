// 最近最久未使用的置换算法

// 发生缺页时，选择最长时间没有被访问的页面进行置换

// 定义缓存结构
var LRUCache = function(capacity){
    this.capacity = capacity;
    this.map = new Map();
}

// get 有key，缓存value，删掉key，再set一遍
LRUCache.prototype.get = function(key){
    // 这里的意义在于：更新此key-value在map对象中的顺序
    if(this.map.has(key)){
        let temp = this.map.get(key);
        this.map.delete(key);
        this.map.set(key,temp);
        return temp;
    }else{
        return -1;
    }
}

// set 有key更新，无key加入，最后检查长度
LRUCache.prototype.put = function(key,value){
    if(this.map.has(key)){
        this.map.delete(key);
    }
    this.map.set(key,value);
    if(this.map.size > this.capacity){
        this.map.delete(this.map.keys().next().value);
    }
}

//  map对象的键值对的顺序为插入的顺序
//  next()方法可以依次访问迭代器对象中的每一个对象，
//  每个对象包含两个属性，done 和 value
//  this.map.keys().next().value 可以拿到map对象中第一个插入的值
