
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
    }else if(Array.isArray(vnode.children)){
        vnode.children.forEach(children => renderer(child, el));
    }

    container.appendChild(el);
}

renderer(vnode,document.body)