
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


function mountComponent(vnode,container) {
    const subtree = vnode.tag()
    renderer(subtree, container)
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
        }
        insert(el,container)
    }
    function patch(n1,n2,container){
        if(!n1) {
            mountElement(n2,container)  // 挂载
        } else {

        }
    }
    function render(vnode,container) {
        if(vnode) {
            // 新旧vnode都存在，一起传递给patch，进行打补丁
            patch(container._vnode,vnode,container)
        } else {
            if(container._vnode) {
                // 旧vnode存在，新vnode不存在，unmount卸载
                container.innerHTML = ''
            }
        }
        container._vnode = vnode
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
