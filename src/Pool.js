import React, { Component } from 'react';

class Pool extends Component {
  render() {
    return (
      <div className="pool-container">
        <p className="pool-name">{this.props.pool.name}</p>
        <p className="pool-address">{this.props.pool.address}</p>
        <p className="pool-type">{this.props.pool.indoor_out}</p>
        <hr />
      </div>
    )
  }
}

export default Pool;
