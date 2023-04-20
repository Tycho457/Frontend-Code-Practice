// 同步渲染
import App from 'App.vue'
createsApp(App).mount('#app')

// 异步渲染
const loader = () => import('App.vue') // 返回一个promise实例
loader().then(App=> {
    createsApp(App),mount('#app')
})

// defineAsyncComponent用于定义一个异步组件,接收一个异步组件加载器作为参数
function defineAsyncComponent(loader) {
    // 用来存储异步加载的组件的变量
    let InnerComp = null;
    // 返回一个包装组件
    return {
        name: 'AsyncComponentWrapper',
        setup() {
            // 异步组件是否加载成功
            const loader = ref(false)
            // 加载器函数
            loader().then(c=>{
                InnerComp = c
                loader.value = true
            })
            return () => {
                // 异步组件加载成功就渲染组件,否则渲染一个占位内容
                return loader.value ? {type:InnerComp} : {type:Text,children:''}
            }
        }
    }
}

const AsyncComp = defineAsyncComponent({
    loader: () => import('CompA.vue'),
    timeout: 2000,
    errorComponent: MyErrorComp 
})