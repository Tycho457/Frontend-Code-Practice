const MyComponent = function() {
    return {
        tag: 'div',
        props: {
            onClick:() => alert('hello')
        },
        children: 'Click me'
    }
}

const MyComponent1 = {
    name: 'MyComponent1',
    data() {
        return {
            foo: 'hello world'
        }
    },
    render() {
        return {
            type: 'div',
            children: '我是文本内容'
        }
    }
}

// 任务缓存队列，利用set自动对任务去重
const queue = new Set()
// 表示是否真正刷新任务队列
let isFlushing = false
const p = Promise.resolve()
// 调度器
function queueJob(job){
    queue.add(job)
    if(!isFlushing) {
        isFlushing = true
        p.then(() => {
            try {
                queue.forEach(job => job())
            } finally {
                isFlushing = false
                queue.clear = 0
            }
        })
    }
}


let currentInstance = null
function setCurrentInstance(instance) {
    currentInstance = instance
}
function mountComponent(vnode,container,anchor)
