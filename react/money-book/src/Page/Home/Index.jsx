import React, { Component } from 'react';
import {Route,Link,useRouteMatch,Switch} from 'react-router-dom';
import List from './List';
import Chart from './Chart';
import HomeHeader from './HomeHeader';

function Index() {
    let { path, url } = useRouteMatch();
    return (
      <React.Fragment>
        <HomeHeader />
        <Link to={`${url}/list`}>列表模式</Link>
        <Link to={`${url}/chart`}>图表模式</Link>
        <Switch >
          <Route path={path} exact >
            <List />
          </Route>
          <Route path={`${path}/list`} >
            <List />
          </Route>
          <Route path={`${path}/chart`}>
            <Chart />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }

export default Index;