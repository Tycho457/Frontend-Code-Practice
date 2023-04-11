// 简易封装axios
const axios = {
    get<T>(url:string):Promise<T>{
        return new Promise((resolve,reject)=>{
            let xhr:XMLHttpRequest = new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200 ){
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}

interface Data {
    message:string,
    code:number
}

axios.get<Data>('./data.json').then(res=>{
    console.log(res);
})

// 泛型约束
interface Len {
    length:number
}

function fn<T extends Len>(a:T){
    a.length
}

let obj3 = {
    name: 'tyc',
    age: 18
}

type key = keyof typeof obj3   // 推断成联合类型
function ob< T extends object,k extends keyof T>(obj3:T,key:k){
    return obj3[key]
}

// 泛型工具
interface Data1 {
    name: string
    age: number
    sex: string
}

type Options<T extends object> = {
    [key in keyof T]: T[key]
}

type B = Options<Data1>

