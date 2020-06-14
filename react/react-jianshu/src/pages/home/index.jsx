import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount(){
        this.props.fetchHomeList();
    }
    state = {  }
    render() { 
        return ( 
            <div>
                Home
                length:{this.props.homeList.size}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        homeList : state.getIn(['home','homeList'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeList(){
            dispatch(getHomeList)
        }
    }
}
 
export default connect(mapDispatchToProps,mapStateToProps)(Home);