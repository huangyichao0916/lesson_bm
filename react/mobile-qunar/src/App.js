import React from 'react';
import Header from './components/header/Header';
import {useCallback} from 'react';
import {connect} from 'react-redux';
import Journey from './components/journey/Journey';

function App(props) {
  const {from,to} = props;
  const onBack = useCallback(() => {
    window.history.back();//history.go(-1)也可以完成类似功能
  },[]);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
        <form action="./query.html" className="form">
          <Journey from={from} to={to} />
          asd
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    from : state.from,
    to : state.to,
  }
}
const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
