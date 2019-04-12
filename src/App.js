import React, { Component } from 'react';
import PoolListData from './data/PoolData.json';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

import PoolList from './components/PoolList';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poolList: PoolListData.PoolListData.PoolData,
      filteredPoolList: PoolListData.PoolListData.PoolData,
      clickedPoolId: null,
      hasError: false,
    };
  }

  getClickedPoolId = clickedPoolId => {
    this.setState({ clickedPoolId });
  }

  setMapError = () => {
    this.setState({ hasError: true });
  }

  handleChange = (__, poolFilter) => {
    this.setState({
      filteredPoolList: this.state.poolList.filter(
        item =>
          poolFilter !== "Any"
            ? item.indoor_out === poolFilter
            : "Indoor" || "Outdoor"
      )
    });
  }

  render() {
    return (
      <div className="app-wrapper">
      {this.state.hasError && <ErrorMessage />}
        <header>
          <h1>Circle Swim</h1>
        </header>
        <main>
          <PoolList
            getClickedPoolId={this.getClickedPoolId}
            poolList={this.state.filteredPoolList}
            handleChange={this.handleChange}
          />

          {this.state.filteredPoolList.length > 0 && (
            <Map
              poolList={this.state.filteredPoolList}
              handleChange={this.handleChange}
              clickedPoolId={this.state.clickedPoolId}
              setMapError={this.setMapError}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
