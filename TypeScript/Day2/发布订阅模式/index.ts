// 方法约束
interface EventFace {
    on: (name: string, callback: Function) => void, // 订阅/监听
    emit: (name: string, ...args: Array<any>) => void,  // 发布/注册
    off: (name: string, fn: Function) => void,  // 只执行一次
    once: (name: string, fn: Function) => void  // 解除绑定
}

interface List {
    [key: string]: Array<Function>,
}

class Dispatch implements EventFace {
    list: List,
    constructor() {
        this.list = {}
    }

    on(name: string)
}