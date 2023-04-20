# 挂载与更新
## 挂载子节点和元素的属性
## HTML Attributes 和 DOM Properties
HTML Attributes：标签上的属性
DOM Properties: 属性

核心：HTML Attributes的作用是设置与之对应的 DOM Pr operties 

## 正确设置元素属性
简介：把vnode.props中定义的属性设置到DOM元素上
对于HTML文件来说，浏览器解析html代码会自动解析HTTP Attributes并设置合适的DOM Properties
对于VUE文件来说

## class的处理
el.className的性能最优

## 卸载操作
主要发生在更新阶段（初次挂载完成后，后续渲染会触发更新）

innerHTML来清空容器元素，但是这样存在诸多问题

方式：根据 vnode 对象获取与其相关联的真实DOM 元素，然后使用原生 DOM 操作方法将该 DOM 元素移除；（封装unmount函数）

vnode和真实DOM建立联系

## 区分vnode的类型
渲染器在执行更新时，需要优先检查新旧 vnode 所描述的内容是否相同。
只有当它们所描述的内容相同时，才有打补丁的必要
## 事件的处理
在虚拟节点中描述事件：
    在 vnode.props 对象中，凡是以字符串 on 开头的属性都视作事件。
如何讲事件添加到DOM元素上：
    只需要在 patchProps 中调用 addEventListener 函数来绑定事件即可
更新事件：
    为了提升性能，我们伪造了 invoker 函数，
    并把真正的事件处理函数存储在 invoker.value 属性中，
    当事件需要更新时，只更新invoker.value 的值即可
## 事件冒泡与更新时机问题
利用事件处理函数被绑定到 DOM 元素的时间与事件触发时间之间的差异。
我们需要屏蔽所有绑定时间晚于事件触发时间的事件处理函数的执行。
## 子节点的更新
规定vnode.children属性只能有如下三种类型
- 字符串类型：代表元素具有文本子节点。
- 数组类型：代表元素具有一组子节点。
- null：代表元素没有子节点。
## Fragment