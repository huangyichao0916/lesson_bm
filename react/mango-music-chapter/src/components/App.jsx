import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import './App.styl'; // webpack
import logo from '../assets/imgs/logo.png';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <img src={logo} alt="logo" className="app-logo"/>
            <h1 className="app-title">Mango Music</h1>
          </header>
          <div className="music-tab">
            <div className="tab-item">
              <NavLink className="nav-link" to="/recommend"><span>推荐</span></NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/ranking"><span>排行榜</span></NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/search"><span>搜索</span></NavLink>
            </div>
          </div>    
          {/* <Switch>
            <Route  path="/recommend" component={ Recommend }/>
            <Route  path="/ranking" component={ Ranking }/>
            <Route  path="/search" component={ Search }/>
            <Redirect from="/" to="/recommend" />
          </Switch> */}
          <Route  path="/recommend" component={ Recommend }/>
          <Route  path="/" component={ Ranking }/>
          <Route  path="/ranking" component={ Ranking }/>
          <Route  path="/search" component={ Search }/>
        </div>
      </Router>
    )
  }
}


export default App;