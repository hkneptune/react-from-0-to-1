import React,{Component} from 'react';

class Syntax1 extends Component {
  
  handleClick1(e, arg) {
    console.log(e, arg);
  }
  
  constructor(props) {
    super(props);

    console.log("传统写法");
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick1.bind(this)}>ClickMe</button>
      <button onClick={this.handleClick1.bind(this, 'test')}>ClickMe2</button>
      </div>
    );
  }
}

export default Syntax1;