import React from "react";
import Search from "./Search";
import Results from "./Result";
import Header from './Header';


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
    // console.log('main');
    const params = this.props.match.params || {}
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm); // 
  }

  componentDidUpdate(prevProps) {
    const currentSearchTerm = this.props.match.params.searchTerm;
    const oldSearchTerm = prevProps.match.params.searchTerm;
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeers(currentSearchTerm)
    }
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
      fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then(data => {
        const beers = data.data || [];
        console.log('data',data);
        console.log('beers',beers);
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
        <Header siteName="Beer me!"/>
        <Search /> 
        <Results beers={this.state.beers}
         loading={this.state.loading} />
      </div>
    )
  }
}


export default Main