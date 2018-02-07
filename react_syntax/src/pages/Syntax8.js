import React,{Component} from 'react';

class Syntax8 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      coffee: [],
    }; 
  }
  
  handleChange(e) {
    const { checked, value } = e.target; 
    let { coffee } = this.state;
    if (checked && coffee.indexOf(value) === -1) {
       coffee.push(value);
    } else{
      coffee = coffee.filter(i => i !== value);
    }

    this.setState({ 
      coffee,
    });
  }
    
  render() {
    const { coffee } = this.state;

    return ( 
      <div>
        <p>Choose your favourite coffee</p>
        <label>
          <input type="checkbox" value="Cappuccino" 
            checked={coffee.indexOf('Cappuccino') !== -1} 
            onChange={this.handleChange} />
          Cappuccino 
        </label> 
        <br/> 

        <label>
          <input type="checkbox" value="Mocha" 
            checked={coffee.indexOf('Mocha') !== -1} 
            onChange={this.handleChange} />
          Mocha 
        </label> 
        <br/> 

        <label>
          <input type="checkbox" value="Latte" 
            checked={coffee.indexOf('Latte') !== -1} 
            onChange={this.handleChange} />
          Latte 
        </label> 
        <br/> 
      </div> 
    );
  } 
}

export default Syntax8;
