import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import PoolList from './PoolList';
import Map from './Map';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poolList: []
    };
  }

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
    }).then(response => response.json()).then(data => this.setState({poolList: data}));
  }

  componentDidMount() {
    this.getPoolData();
  }

  render() {
    return (<main>
      <PoolList poolList={this.state.poolList}/>
      <Map poolList={this.state.poolList}/>
    </main>);
  }
}

export default App;
