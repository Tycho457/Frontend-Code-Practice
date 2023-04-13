# 编译器
作用：将模板编译为渲染函数
例如：
<div @click="handler">
    click me
</div>
编译为
render() {
    return h{'div',{onClick: handler}, 'click me'}
}