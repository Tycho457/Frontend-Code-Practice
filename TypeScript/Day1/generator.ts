// 解构，底层原理就是去调用 iterator
let obj1 = {
    max: 5,
    current: 0,
    [Symbol.iterator](){
        return{
            max: this.max,
            current: this.current,
            next() {
                if(this.current == this.max ){
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: this.current++,
                    done: false
                }
            }
        }
    }
}

let x = [...obj1]   //  调用的Symbol.iterator
console.log(x)

let y = {...obj1}
console.log(y)