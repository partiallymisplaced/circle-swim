import React, { Component } from 'react';
import Pool from './Pool';

class PoolList extends Component {
    state = {
      toggle: true,
    }


  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render() {
    console.log('props', this.props)

    return (
      <div>
        <aside>
          <header>
            <h1>Circle Swim</h1>
            <button onClick={this.handleClick} >Toggle</button>
          </header>
            {this.state.toggle ? (<p>Toggle on</p>)
              : (<p>Toggle off</p>)
            }

          {console.log(this.state.toggle)}
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
      </div>
    )
  }
}

export default PoolList;
