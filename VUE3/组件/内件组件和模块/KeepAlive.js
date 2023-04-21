const KeepAlive = {
    // KeepAlive 组件独有的属性，用作标识
    _isKeepAlive: true,
    setup(props, {slots}) {
        // 创建一个缓存对象
        // key: vnode.type()
        // value: vnode
        const cache = new Map()
        const instance = currentInstance
        // 实例上存在特殊的KeepAliveCtx对象,由渲染器注入
        // 该对象会暴露渲染器的一些内部方法,move函数用来在不同容器间转移DOM
        const { move, createElement } = instance.KeepAliveCtx

        // 创建隐藏容器
        const storageContainer = createElement('div')
        // KeepAlive 组件的实例上会被添加两个内部函数，分别是 _deActivate和 _activate
        instance._deActivate = (vnode) => {
            move(vnode, storageContainer)
        }
        instance._activate = (vnode,container, anchor) => {
            move(vnode,container,anchor)
        }

        return() => {
            let rawVNode = slots.default()
            // 若不是组件,直接渲染即可
            if(typeof rawVNode.type !== 'object') {
                return rawVNode 
            }
            
            // 在挂载时先获取缓存的组件 vnode
            const cachedVNode = cache.get(rawVNode.type)
            if(cachedVNode) {
                // 如果有缓存的内容，则说明不应该执行挂载，而应该执行激活
                rawVNode.component = cachedVNode.component
                // 避免渲染器重新挂载它
                rawVNode.keptAlive = true
            }else{
                cache.set(rawVNode.type, rawVNode)
            }
            // 在组件 vnode 上添加 shouldKeepAlive 属性，并标记为 true，避免渲染器真的将组件卸载
            rawVNode.shouldKeepAlive = true
            rawVNode.keepAliveInstance = instance
            return rawVNode
        }
    }
}