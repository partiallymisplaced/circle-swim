import React, { Component } from 'react';
import Pool from './Pool';

class PoolList extends Component {
  state = {
    hasError: false,
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    console.log('caught an error');
  }

  render() {

    return <aside>
        <label htmlFor="select-pool-type">Pool Type:</label>
        <select id="select-pool-type" name="select-pool-type" tabIndex="1" onChange={event => this.props.handleChange(this.props.pool, event.target.value)}>
          <option value="Any">Any</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>

        <div>
          <ol>
            {this.props.poolList.map(pool => (
              <li key={pool.pmaid} className="pool-list-item" tabIndex="1">
                <Pool
                  pool={pool}
                  getClickedPoolId={this.props.getClickedPoolId}
                />
              </li>
            ))}
          </ol>
        </div>
      <footer>
        <p>Pool data from the
        <a href="https://data.seattle.gov/" target="_blank" rel="noopener noreferrer"> City of Seattle Open Data portal</a>.</p>
        </footer>
      </aside>;
  }
}

export default PoolList;
