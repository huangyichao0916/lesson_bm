import React , {Fragment , useState , createContext} from 'react';
import logo from './logo.svg';
import './App.css';

const context = createContext();
const {Provider , Consumer} = context;

function App() {
  const [state , setTheme] = useState({theme:'red'});
  console.log(state);
  return (
    <Provider value={{state,setTheme}}>
      <Fragment>
        <Header theme={state.theme}/>
        <Footer />
      </Fragment>
    </Provider>
  );
}

function Login() {
  return (
      <div>
        Login
        <Consumer>
          {
            (obj) => {
              return (
                <span>span</span>
              )
            }
          }
        </Consumer>
      </div>
  )
}
function Header(props) {
  // class this.props
  // FC
  const { theme } = props;
  return (
    <div style={{ color: theme }}>
      Header
      {/* <Login theme={theme}/> */}
      <Login />

      {/* Login 还有其他组件  <Avatar theme={theme}> */}
    </div>
  )
}
function Footer() {
  return 'footer';
}

export default App;
