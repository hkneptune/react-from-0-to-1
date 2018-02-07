import React,{Component} from 'react';
import List from './List';

class Syntax12 extends Component {
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this); 
  }
           
  handleItemChange(item) {
    console.log(item);
  }

  render() {
    return (
      <List list={[{text: 1}, {text: 2}]} 
        handleItemChange={this.handleItemChange}
      />
    );
  }
}

export default Syntax12;
