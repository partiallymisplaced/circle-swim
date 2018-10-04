import React, { Component } from 'react';

class Pool extends Component {
  render() {
    return (
      <div>
        <p className="pool-name">{this.props.pool.name}</p>
        <p className="pool-address">{this.props.pool.address}</p>
        <p className="pool-type">{this.props.pool.indoor_out}</p>
      </div>
    )
  }
}

export default Pool;
