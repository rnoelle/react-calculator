import React, { Component } from 'react';

class BackButton extends Component {
  render() {
    return (
      <div className="button left"
        onClick={this.props.handleBackClick}>
        Del
      </div>
    )
  }
}

export default BackButton;
