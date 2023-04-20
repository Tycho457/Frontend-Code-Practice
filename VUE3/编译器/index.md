# 编译器
## 模板DSL的编译器
模板 -> [parser(str)] -> 模板AST -> [transform(ast)] -> jsAST -> [generate(jsAST)] -> 渲染函数
## parser的实现原理与状态机
Token: 词法记号
有限状态自动机:
## 构造AST
递归下降算法
AST的结构
Token构建AST
## AST的转换与插件化架构
节点的访问:深度优先遍历
## 转换上下文和节点操作
## 将 模板AST 转换为 JavaScript AST
