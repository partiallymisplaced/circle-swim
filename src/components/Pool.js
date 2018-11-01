import React, { Component } from 'react';

class Pool extends Component {

  handleClick = () => {
    return this.props.getClickedPoolId(this.props.pool.pmaid);
  }

  render() {
    return <div>
        <h3 className="pool-name" onClick={this.handleClick} >
          {this.props.pool.name}
        </h3>
        <p className="pool-type">{this.props.pool.indoor_out}</p>
      </div>;
  }
}

export default Pool;
