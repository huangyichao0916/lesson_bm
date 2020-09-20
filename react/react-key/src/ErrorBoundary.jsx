class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    // 这个静态方法和componentDidCatch方法定义一个即可
    static getDerivedStateFromError(error) {
        // 当发生错误时，设置hasError为true，然后展示自己的错误提示组件
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // 这里可以将报错信息上报给自己的服务
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error</h1>;
        }
        return <>{this.props.children}</>;
    }
}