type A = '唱' | '跳' | 'rap'

function kun (value: A){
    switch(value) {
        case "唱":
            break;
        case "跳":
            break;
        case "rap":
            break;
        default:
            // 兜底逻辑
            const error:never = value;
            break;
    }
}

// never：表示永远不会发送的类型
// 也可以用来表示无法到达的代码段（如上）
// 泛型的类型参数，表示不可能有任何值被传递给该泛型类型

