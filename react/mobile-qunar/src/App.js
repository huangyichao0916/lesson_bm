import React from 'react';
import Header from './components/header/Header';
import {useCallback,useMemo} from 'react';
import {connect} from 'react-redux';
import Journey from './components/journey/Journey';
import {bindActionCreators} from 'redux';
import {exchangeFromTo} from './store/actions';

function App(props) {
  // console.log('------',props);
  const {from,to,dispatch} = props;
  const onBack = useCallback(() => {
    window.history.back();//history.go(-1)也可以完成类似功能
  },[]);
  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo
    },dispatch)
  },[])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
        <form action="./query.html" className="form">
          <Journey from={from} to={to} {...cbs}/>
          asd
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}
const mapDispatchToProps = dispatch => {
  return{
    dispatch,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
