import React, { Component } from 'react';
import Pool from './Pool';

class PoolList extends Component {
  render() {

    return (
      <aside>
        <label htmlFor="select-pool-type">Pool Type:</label>
        <select
          id="select-pool-type"
          name="select-pool-type"
          onChange={(event) => this.props.handleChange(
            this.props.pool, event.target.value
          )}
          >
          <option value="Any">Any</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>

        <div>
          <ol>
            {
              this.props.poolList
              .map(pool => (
                <li key={pool.pmaid} className="pool-list-item">
                  <Pool
                    pool={pool}
                    />
                </li>

              ))
            }
          </ol>
        </div>
      </aside>
    )
  }
}

export default PoolList;
