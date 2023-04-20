const MyComponent = {
    name: 'MyComponent',
    setup(props,{emit}) {
        emit('change',1,2)
        return () => {
            return
        }
    }
}