if(j>oldEnd && j<=newEnd){
}else if(j<=oldEnd && j>newEnd){
}else{
    // 构造 source 代码
    const count = newEnd - j + 1 // 新组中未处理节点数量
    const source = new Array(count);
    source.fill(-1)

    const oldStart = j
    const newStart = j

    let moved = false // 是否需要移动节点
    let pos = 0 // 遍历旧组遇到最大的索引值k

    const keyIndex = {}
    for(let i = newStart;i <= newEnd; i++){
        keyIndex[newChildren[i].key] = i;
    }
    for(let i = oldStart;i <= oldEnd; i++){
        oldVNode = oldChildren[i]
        const k = keyIndex[oldVNode.key]

        if(typeof k !== 'underfined') {
            newVNode = newChildren[k]
            patch(oldVNode, newVNode, container)
            source[k - newStart] = i
            // 判断节点是否需要移动
            if (k < pos) {
                moved = true
            } else {
                pos = k
            }
        } else {
            unmount(oldVNode)
        }
    }
}