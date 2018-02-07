import React,{Component} from 'react';

class MyButton1 extends Component {
	
	constructor(props) {
    super(props);

    this.state = {
      isPressed: props.isPressed,
      isHovered: props.isHovered
    }
	}
	
  render() {
		let btnClass = 'btn';
		if (this.state.isHovered) { 
			btnClass += ' btn-over'; 
		} else if (this.state.isPressed) { 
			btnClass += ' btn-pressed'; 
		}

		console.log(btnClass);
	
		return <button className={btnClass}>{this.props.label}</button>;
  }
}

export default MyButton1;