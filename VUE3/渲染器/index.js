const { resolve } = require("mathjs");

// vnode虚拟DOM，container真实DOM元素，渲染器会将虚拟DOM渲染到该挂载点下
function renderer(vnode, container){
    const el = document.createElement(vnode.tag)
    for(const key in vnode.props) {
        if(/^on/.test(key)) {
            el.addEventListener(
                key.substr(2).toLowerCase(),
                vnode.props[key]
            )
        }
    }
    if(typeof vnode.children === 'string'){
        el.appendChild(document.createTextNode(vnode.children))
    }else if(typeof vnode.tag === 'function'){
        mountComponent(vnode,container)
    }else if(Array.isArray(vnode.children)){
        vnode.children.forEach(children => renderer(child, el));
    }

    container.appendChild(el);
}

renderer(vnode,document.body)



function patchProps(el,key,preValue,nextValue) {
    if(/^on/.test(key)){
        let invoker = el._vei
        const name = key.slice(2).toLowerCase()
        if(nextValue) {
            if(!invoker) {
               invoker = el._vei = (e) => {
                invoker.value(e)
               } 
            invoker.value = nextValue
            el.addEventListener(name,invoker)
            }else if(invoker){
                el.removeEventListener(name, invoker)
            }
        }
    } else if (key === 'class') {

    } else if (shouldSetAsProps(el, key, nextValue)) {

    }
}

// 挂载/打补丁
function createRenderer(optiona) {
    const {
        createElement,
        insert,
        setElementText
    } = options
    function mountElement(vnode,container) {
        const el = createElement(vnode.tag)
        if(typeof vnode.children === 'string') {
            setElementText(el,vnode.children)
        }else if(Array.isArray(vnode.children)){
            vnode.children.forEach(child => {
                patch(null, child, el)
            })
        }
        insert(el,container)
    }
    function patch(n1,n2,container){
        if(n1 && n1.type !== n2.type) {
            unmount(n1) // 新旧vnode不同，直接卸载
            n1 = null
        }
        const { type } = n2
        if(typeof type === 'string') {
            if(!n1) {
                mountElement(n2,container)
            }else{
                patchElement(n1,n2)
            }
        }else if(typeof type === 'object') {
            // n2.type为object，说明是组件
        }else if(type === 'xxx') {

        }
        
    }
    function render(vnode,container) {
        if(vnode) {
            // 新旧vnode都存在，一起传递给patch，进行打补丁
            patch(container._vnode,vnode,container)
        } else {
            if(container._vnode) {
                // 旧vnode存在，新vnode不存在，unmount卸载vnode
                unmount(container._vnode)
            }
        }
        container._vnode = vnode
    }
    function unmount(vnode){
        const parent = vnode.el.parentNode
        if(parent) {
            parent.removeChild(vnode.el)
        }
    }
    // 渲染组件
    function mountComponent(vnode,container,anchor) {
        // 检查是否是函数式组件
        const isFunctional = typeof vnode.type === 'function'
        const componentOptions = vnode.type;
        if(isFunctional) {
            componentOptions = {
                render: vnode.type,
                props: vnode.type.props
            }
        }
        const { render, data, props: propsOption,setup, beforeCreate, created, beforeMount,
                mounted, beforeUpdate, updated } = componentOptions;
        beforeCreate && beforeCreate();   
        const state = data ? reactive(data()) : null;
        const [props, attrs] = resolveProps(propsOption, vnode.props)
        // 组件实例
        const instance = {
            state,
            props: shallowReactive(props),
            isMounted: false,
            // 组件所渲染的内容，即子树
            subTree: null
        }

        const setupContext = { attrs }
        const setupResult = setup(shallowReadonly(instance.props),setupContext)
        let setupState = null
        vnode.component = instance
        created && created.call(state)

        const renderContext = new Proxy(instance,{
            get(t, k, r) {
                const { state, props } = t
                // 先尝试读取自身状态数据
                if(state && k in state) {
                    return state[k]
                // 组件自身没有该数据,尝试从props中读取
                }else if(k in props) {
                    return props[k]
                }else{
                    console.error('不存在')
                }
            },
            set(t,k,v,r) {
                const {state,props} = t
                if(state && k in state) {
                    state[k] = v
                }else if(k in props) {
                    console.warn(`Attempting to mutate prop "${k}". Props are readonly.`)
                }else{
                    console.error('不存在')
                }
            }
        })
        // 自更新
        effect(()=> {
            const subTree = render.call(state,state)
            if(!instance.isMounted) {
                // 初次挂载
                beforeMount && beforeMount.call(state)
                patch(null,subTree,container,anchor)
                instance.isMounted = true
                mounted && mounted.call(state)
            }else{
                // 自更新
                beforeUpdate && beforeUpdate.call(state)
                patch(instance.subTree,subTree,container,anchor)
                updated && updated.call(state)
            }
           instance.subTree = subTree
        },{
            // 指定该副作用函数的调度器为 queueJob 即可
            scheduler: queueJob
        })
    }
    return {
        render
    }
}

// 自定义渲染器
const vnode = {
    type: 'h1',
    children: 'hello'
}

const renderer = createRenderer();
renderer.render(vnode,document.querySelector('#app'));
