import React, { Component } from 'react';

class Clear extends Component {
  render() {
    return (
      <div className="button left" 
        onClick={this.props.handleClearClick}
      >
        C
      </div>
    )
  }
}

export default Clear;
