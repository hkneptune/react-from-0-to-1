import React,{Component} from 'react';

class Syntax3 extends Component {
  
  handleClick1 = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
      <button onClick={this.handleClick1}>ClickMe</button>
      </div>
    );
  }
}

export default Syntax3;