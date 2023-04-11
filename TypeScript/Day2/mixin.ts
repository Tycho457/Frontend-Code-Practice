// 可以看成是合并
// 1、对象混入
interface Name {
    name: string
}

interface Age {
    age: number
}

interface Sex {
    sex: number
}

let people1: Name = {name: "tycho457"}
let people2: Age = {age:20}
let people3: Sex = {sex:1}

const personMixin = Object.assign(people1,people2,people3)

// 2、类的混入
class AA {
    type: boolean = false;
    changeType():void {
        this.type = !this.type
    }
}

class BB {
    name: string = "";
    getName():string {
        return this.name
    }
}
// cc类结合了AA,BB类，用implements说明把AA,BB当接口
class CC implements AA,BB {
    // 占位属性
    type:boolean = false;
    name: string = "tycho";
    changeType!: () => void
    getName!: () => string 
}

mixins(CC,[AA,BB])
function mixins (curCls:any,itemCls:any[]){
    itemCls.forEach(item => {
        // Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCls.prototype[name] = item.prototype[name]
        })
    })
}