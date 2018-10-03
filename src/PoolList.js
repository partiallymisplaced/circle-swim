import React, { Component } from 'react';
import Pool from './Pool';

class PoolList extends Component {
  render() {
    console.log('props', this.props)

    return (
      <aside>
      <h1>Circle Swim</h1>
      <select>
        <option>Any</option>
        <option>Indoor</option>
        <option>Outdoor</option>
      </select>
      <div>
        <ol>
          {
            this.props.poolList
            .map(pool => (
              <li key={pool.pmaid}>
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
