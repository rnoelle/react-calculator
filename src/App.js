import React, { Component } from 'react';
import './styles/App.css';
import './styles/calc.css';

import TotalDisplay from './components/totalDisplay';
import Button from './components/button';
import Clear from './components/clear';
import BackButton from './components/back';
import OperationButtons from './components/operationButtons';

class App extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      num: undefined,
      action: undefined,
      display: 0
    }
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.changeOperation = this.changeOperation.bind(this);

    this.numberButtons = [];
    for (var i = 1; i < 10; i++) {
      this.numberButtons.push(<Button label={i} key={i} data={i} handleClick={this.handleNumberClick}/>);
    }
    this.numberButtons.push(<div className="button empty"></div>)
    this.numberButtons.push(<Button label={0} key={0} data={0} handleClick={this.handleNumberClick}/>)

  }

  handleNumberClick(num) {
    if (this.state.num) {
      let newNum = this.state.num + num.toString();
      this.setState({num: newNum, display: newNum})
    } else {
      this.setState({num: num, display: num})
    }
  }

  handleClearClick() {
    this.setState({total:0, num: 0, action: undefined, display:0});
  }

  handleBackClick() {
    let newNum = this.state.num.slice(0, this.state.num.length - 1);
    if (!newNum.length) newNum = 0;
    this.setState({num: newNum, display: newNum})
  }

  changeOperation(op) {
    let newTotal = Number(this.state.total);
    if (this.state.action && this.state.num) {
      switch (this.state.action) {
        case 'add':
          newTotal += Number(this.state.num);
          break;
        case 'subtract':
          newTotal -= Number(this.state.num);
          break;
        default:
          console.log('nope')
      }
      if (op === 'equals') {
        this.setState({display:newTotal, total:newTotal});
        return;
      }
      this.setState({num: 0, total: newTotal, display: newTotal, action: op})
    } else {
      this.setState({action: op, num: undefined, total: this.state.num})
    }
  }

  render() {

    return (
      <div className="calculator">
        <TotalDisplay
          total={this.state.display}
        />
        <Clear handleClearClick={this.handleClearClick}/>
        <BackButton handleBackClick={this.handleBackClick}/>
        <div className="number-buttons">{this.numberButtons}</div>
        <OperationButtons handleOperatorClick={this.changeOperation}/>
      </div>
    );
  }
}

export default App;
