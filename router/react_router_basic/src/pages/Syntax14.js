import React,{Component} from 'react';

class Syntax14 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Define the callback function.
    const AreaOfCircle = (radius) => {    
      let area = Math.PI * (radius * radius);
      return area.toFixed(0);
    } 

    // Create an array.
    const radii = [10, 20, 30];

    // Get the areas from the radii.
    let areas = radii.map(AreaOfCircle);

    return (
      <div>
      	<div>{areas[0]}</div> 
      	<div>{areas[1]}</div> 
      	<div>{areas[2]}</div> 
      </div>
    );
  }
}

export default Syntax14;
