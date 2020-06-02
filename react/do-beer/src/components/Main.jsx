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
    // console.log('main------',this.props.match.params);
    const params = this.props.match.params || {}
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm); // 
  }

  loadBeers(searchTerm = "hops") {
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({
        beers:localBeers,
        loading:false,
      })
    }else{
      fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) // api 地址
      .then(data => data.json())
      .then(data => {
        const beers = data.data || [];
        this.setState({
          loading: false,
          beers
        });

        localStorage.setItem(
          `search-${searchTerm}`,
          JSON.stringify(this.state.beers)
        )
      })
    }
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