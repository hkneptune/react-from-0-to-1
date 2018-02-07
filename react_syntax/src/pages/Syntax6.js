import React,{Component} from 'react';

class Syntax6 extends Component {

  constructor(props) {
    super(props); 
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    
    this.state = { 
      inputValue: '', 
      textareaValue: '',
    };
  }

  handleInputChange(e) { 
    this.setState({inputValue: e.target.value, });
    console.log(e.target.value,);
  }
  
  handleTextareaChange(e) { 
    this.setState({textareaValue: e.target.value, });
    console.log(e.target.value);
  }

  render() {
      let { inputValue, textareaValue } = this.state; 
      return (
        <div>
          <p>Single Input:    
            <input type="text" value={inputValue} 
              onChange={this.handleInputChange} />
          </p> 
          <p>Multiple Input:  
            <textarea value={textareaValue} 
              onChange={this.handleTextareaChange} />
          </p> 
        </div>
      );
  }
}

export default Syntax6;
