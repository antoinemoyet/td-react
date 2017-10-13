import React, { Component } from 'react';
import dummy from './../dummy';

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummy,
      filtered:dummy,
    };
  }

  render() {
    return (
      <div className="WorkList">
      {
        this.state.data.map((post) => {
          return (
            <div>
              <img src={ post.picture } />
              <span>{ post.username }</span>
            </div>
            );
         })
      }
      </div>
    );
  }
}

export default WorkList;