import React,{Component} from 'react';

class Syntax2 extends Component {
  
  handleClick1(e) {
    console.log(e);
  }
  
  constructor(props) {
    super(props);

    this.handleClick1 = this.handleClick1.bind(this);
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick1}>ClickMe</button>
      </div>
    );
  }
}

export default Syntax2;