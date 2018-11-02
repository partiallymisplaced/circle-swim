import React, { Component } from 'react';
import ErrorMessage from './components/ErrorMessage';
// import logo from './logo.svg';
import './App.css';

import PoolList from './components/PoolList';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poolList: [],
      filteredPoolList: [],
      clickedPoolId: null,
      hasError: false,
    };
  }
  getClickedPoolId = clickedPoolId => {
    this.setState({ clickedPoolId });
  };

  getPoolData() {
    fetch("https://data.seattle.gov/resource/ppq2-qxkx", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        app_token: "XYEEYf573j7hRlczkT6WSAZKK"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ poolList: data, filteredPoolList: data }))
      .catch((error) => {this.setState({hasError: true})})
  }

  setMapError = () => {
    this.setState({ hasError: true });
  } 

  // The pool data gets fetched
  async componentDidMount() {
    await this.getPoolData();
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
  };

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
