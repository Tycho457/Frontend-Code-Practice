// 装饰器，一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。

// 定义一个类装饰器函数
const watcher: ClassDecorator = (target: Function) => {
    target.prototype.getParams = <T>(params: T):T => {
        return params
    }
}

@watcher
class AAA {
    constructor() {}
}

const a = new AAA();
console.log((a as any).getParams('123'));

// 装饰器工厂
// 装饰器组合: 就是可以使用多个装饰器
// 方法装饰器
// 属性装饰器
// 参数装饰器