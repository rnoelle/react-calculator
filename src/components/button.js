import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="button left"
        onClick={() => this.props.handleClick(this.props.label)}
      >
        {this.props.label}
      </div>
    )
  }
}

export default Button;
