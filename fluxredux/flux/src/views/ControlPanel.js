import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {

  render() {
    return (
      <div style={style}>
        <Counter caption="First" typeNumber={1}/>
        <Counter caption="Second" typeNumber={1}/>
        <Counter caption="Third" typeNumber={1}/>
        <Counter caption="Four" typeNumber={2}/>
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;

