import React from "react";
// StatefullComponent  StatelessComponent
import Beer from "./Beer";


class Results extends React.Component {
    render() {
        let {loading , beers} = this.props;
        if (loading) {
        return <div>Loading...</div>
        }
        return (
        <div className="results">
            <div className="beers">
            {
                beers.map( details => <Beer details={details} key={details.id}/>)
            }
            </div>
        </div>
        )
    }
}


export default Results;