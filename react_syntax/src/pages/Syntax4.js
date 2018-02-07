import React,{Component} from 'react';

class Syntax4 extends Component {
  
  handleClick1(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
      <button onClick={()=>this.handleClick1('abc')}>ClickMe</button>
      </div>
    );
  }
}

export default Syntax4;