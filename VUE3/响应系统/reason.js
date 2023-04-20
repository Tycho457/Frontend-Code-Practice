// const obj = { text:"hello world" }

// 存储被注册的副作用函数
let activeEffect
// 注册副作用函数
function effect(fn){
    activeEffect = fn;
    fn()
}

// 注册副作用函数
// function effect(){
//     document.body.innerText = obj.text
// }

// 存储副作用函数的 ‘桶’
const bucket = new Set()

const data = { text:'hello world' }
// 对原始数据data的代理
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target ,key) {
        // 将副作用函数添加到桶里
        if(activeEffect){
            bucket.add(activeEffect)
        }
        // 返回属性值
        return target[key]
    },

    // 拦截设置操作
    set(target,key,newVal) {
        // 设置属性值
        target[key] = newVal
        // 把副作用函数从桶里取出并执行
        bucket.forEach(fn => fn())
        return true
    }
})