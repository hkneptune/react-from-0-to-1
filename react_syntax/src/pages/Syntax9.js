import React,{Component} from 'react';

class Syntax9 extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) { 
    e.preventDefault();
    //By ref
    const { value } = this.refs.name;
    console.log(value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="name" type="text" defaultValue="Hangzhou" /> 
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Syntax9;
