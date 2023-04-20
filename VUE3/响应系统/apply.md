# Ref全家桶
## ref
- 接受一个内部值并返回一个响应式且可变的 ref 对象。
- ref 对象仅有一个 .value property，指向该内部值。
- 被ref包装之后需要.value 来进行赋值
## isRef
- 判断是不是一个ref对象
## shallowRef
- 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的
## triggerRef
- 强制更新页面DOM
## customRef
- 自定义ref

# Reactive全家桶
## reactive用来绑定复杂的数据类型（对象，数组）
- 不可以绑定普通的数据类型，会报错
- 修改值无需
## readonly
- 拷贝一份proxy对象将其设置为只读
## shallowReactive
- 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图

