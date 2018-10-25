import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import PoolList from './components/PoolList';
import Map from './components/Map';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poolList: [],
      poolsToRender: []
    };
  }

 

  // getPoolData().then(
  // initMap()
  // )
  //

  getPoolData() {
    fetch('https://data.seattle.gov/resource/ppq2-qxkx', {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        "app_token": "XYEEYf573j7hRlczkT6WSAZKK"
      }
    })
    .then(response => response.json())
    .then(data => this.setState({poolList: data, poolsToRender: data}))
    // .then(this.initMap())
  }

  async componentDidMount() {
    await this.getPoolData()

    console.log("The pool data gets fetched in componentDidMount");
  }

  handleChange = (__, poolFilter) => {
    this.setState({
      poolsToRender: this.state.poolList.filter(
        item => poolFilter !=='Any'
        ? item.indoor_out === poolFilter
        : 'Indoor' || "Outdoor" ),
    });
  }

  render() {
    return (
    <div className="app-wrapper">
      <header>
        <h1>Circle Swim</h1>
      </header>
      <main>

        {/* {console.log(this.state.poolsToRender)} */}
        <PoolList
          poolList={this.state.poolsToRender}
          handleChange={this.handleChange}/>
        
        {this.state.poolsToRender.length > 0 && 
            <Map
            poolList={this.state.poolsToRender}
            handleChange={this.handleChange} />
        }
        
        
      </main>
    </div>
    );
  }
}

export default App;
