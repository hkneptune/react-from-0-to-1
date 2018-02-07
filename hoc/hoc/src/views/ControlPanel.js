import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';
import AddUserProp from './AddUserProp.js';
import CountDown from './CountDown.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
          <hr/>
          <Summary />
          <hr/>
          <AddUserProp>
              {(user) => <div>{user}</div> }
          </AddUserProp>
          <hr/>
          <CountDown startCount={10}>
              {
                  (count) => <div>{count>0?count:"新年快乐"}</div>
              }
          </CountDown>
      </div>
    );
  }
}

export default ControlPanel;

