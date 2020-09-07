13. foo.bind(A). bind(B). bind(C)，this指向谁？
 - 指向A

- 手写简易useState
 ```js
    //hooks的原理就是闭包
    const useState = (function(){
        let _state;
        return function(initState){
            _state = _state || initState;
            function setState(newState) {
                _state = newState;
                render();
            }
            return [_state,setState];
        }
    })()
    function render() {
        ReactDOM.render(<App/>,document.getElementById('root'))
    }
 ```

14. import和require的区别
 