import React, { Component } from 'react';

import Button from './button';

class OperationButtons extends Component {
  constructor() {
    super()

    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }
  render() {
    return (
      <div className="operation-buttons">
        <Button label="+" handleClick={() => this.handleOperatorClick('add')}/>
        <Button label="-" handleClick={() => this.handleOperatorClick('subtract')}/>
        <Button label="=" handleClick={() => this.handleOperatorClick('equals')}/>
      </div>
    )
  }

  handleOperatorClick(op) {
    return this.props.handleOperatorClick(op);
  }
}

export default OperationButtons;
