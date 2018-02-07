import React,{Component} from 'react';

class Syntax7 extends Component {
  constructor(props) {
    super(props);

    this.handeChange = this.handleChange22222.bind(this);

    console.log(this);

    this.state = { 
      radioValue: ''
    }; 
  }
  
  handleChange22222(e) { 
    console.log(this);
    this.setState({
       radioValue: e.target.value
    });
  }
  
  render() {
    let { radioValue } = this.state;
    return ( 
      <div>
        <p>gender:</p> 
        <label>male: 
          <input type="radio" value="male" 
            checked={radioValue === 'male'} 
            onChange={this.handeChange}/> 
          </label> 
        <label>female: 
          <input type="radio" value="female" 
            checked={radioValue === 'female'} 
            onChange={this.handeChange} /> 
        </label>
      </div> 
    );
  } 
}

export default Syntax7;
