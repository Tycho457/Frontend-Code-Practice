// 由JSAST生成渲染函数代码
function generate(node){
    // 上下文对象
    const context = {
        code: '',
        push(code) {
            context.code += code
        }
    } 
    genNode(node,context)
    // 返回渲染函数代码
    return context.code
}


function compile(template) {
    const ast = parse(template)
    transform(ast)
    const code = generate(ast.jsNode)
    return code
}