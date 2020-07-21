import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentList from '../components/CommentList';

class CommentListContainer extends Component{
    render (){
        console.log(this.props.comemnts)
        return (
            <div>
                <CommentList 
                    comemnts={this.props.comemnts}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments : state.comemnts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        myOnclick:() => {
            dispatch({
                type:'plus',
                payload:10,
            })
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer);