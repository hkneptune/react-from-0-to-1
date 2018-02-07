import React, {Component} from 'react';

import MyButton1 from './MyButton1'
import '../style.css'; 

class Syntax10 extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="sty1">
        <MyButton1 label="abcdef" />
      </div>
    );
  }
}

export default Syntax10;
