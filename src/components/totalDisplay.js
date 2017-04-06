import React, { Component } from 'react';

class TotalDisplay extends Component {
  render() {
    return (
      <div className="total-display">
        {this.props.total}
      </div>
    )
  }
}

export default TotalDisplay
