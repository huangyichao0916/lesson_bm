import React from "react";
import Search from "./Search";
import Results from "./Result";


class Main extends React.Component { 
  constructor() {
    super();
    this.state = {
      beers: [],
      loading: true // 正在加载中  体验
    }
  }
  
  componentDidMount() {
    console.log('-------',this.props.match.params);
    const params = this.props.match.params || {}
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm); // 
  }

  loadBeers(searchTerm = "hops") {
   
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) // api 地址
      .then(data => data.json())
      .then(data => {
        const beers = data.data || [];
        this.setState({
          loading: false,
          beers
        });
        console.log(beers)
      })
  }


  render() {
    return (
      <div>
        <Search /> 
        <Results beers={this.state.beers}
         loading={this.state.loading} />
      </div>
    )
  }
}


export default Main