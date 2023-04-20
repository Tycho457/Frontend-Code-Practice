// 对AST中节点的访问
function traverseNode(ast) {
    const currentNode = ast
    const children = currentNode.children
    if(children){
        for(let i=0;i<children.length;i++){
            traverseNode(children[i]);
        }
    }
}

// 封装 transform函数,对AST进行转换
function transform(ast) {
    traverseNode(ast)
    console.log(dump(ast))
}

const ast = parse(`<div><p>Vue</p><p>Template</p></div>`)
transform(ast)