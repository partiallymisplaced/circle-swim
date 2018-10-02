import React, { Component } from 'react';
import Pool from './Pool';

class PoolList extends Component {
  render() {
    return (
      <aside>
      <h1>Circle Swim</h1>
      <div>
        <Pool />
      </div>
      </aside>
    )
  }
}

export default PoolList;
