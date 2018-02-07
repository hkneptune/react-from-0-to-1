import React,{Component} from 'react';

class Syntax5 extends Component {
  
  componentDidMount() {
    this.refs.button22.addEventListener('click', e => { 
      this.handleClick(e);
    }); 
  }
  
  handleClick(e) {
    console.log(e);
  }
    
  componentWillUnmount() { 
    this.refs.button22.removeEventListener('click');
  }

  render() {
    return <button ref="button22">Test</button>;
  }
}

export default Syntax5;