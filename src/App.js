import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import PoolList from './PoolList';
import Map from './Map';

class App extends Component {

  render() {
    return (
    <main>
      <PoolList />
      <Map />
    </main>
    );
  }
}

export default App;
