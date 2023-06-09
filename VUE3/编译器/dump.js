// 打印当前AST节点中的信息
function dump(node, indent = 0) {
    const type = node.type
    const desc = node.type === 'Root'? '' : node.type === 'ELement' ? node.tag : node.content
    console.log(`${'-'.repeat(indent)}${type}: ${desc}`)
    if(node.children) {
        node.children.forEach(n => dump(n, indent + 2))
    }
}