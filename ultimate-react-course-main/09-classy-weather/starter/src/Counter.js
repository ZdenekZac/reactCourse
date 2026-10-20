import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((curState) => {
      return {
        count: curState.count - 1,
      };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return {
        count: curState.count + 1,
      };
    });
  }

  render() {
    const date = new Date('June 21 2027');
    date.setDate(date.getDate() + this.state.count);

    return (
      <div className='container'>
        <button className='counterButton' onClick={this.handleIncrement}>
          +
        </button>

        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button className='counterButton' onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
