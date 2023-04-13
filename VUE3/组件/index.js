const MyComponent = function() {
    return {
        tag: 'div',
        props: {
            onClick:() => alert('hello')
        },
        children: 'Click me'
    }
}