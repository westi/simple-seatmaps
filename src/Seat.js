import React from 'react';

class Seat extends React.Component {
  render() {
    return (
      <span className={'seat free ' + this.props.selectionState} onClick={() => this.props.onClick()}>
        {this.props.value}
      </span>
    );
  }
}

export default Seat;
