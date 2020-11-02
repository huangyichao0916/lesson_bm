import './App.css';
import NavWrapper from './components/navWrapper'

function App(props) {
  return (
    <div className="App">
      <NavWrapper obj={props.obj}/>
    </div>
  );
}

export default App;
