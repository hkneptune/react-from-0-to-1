import React,{Component} from 'react';

//reduce
//同时应用一个函数针对数组的两个值(从左到右)，以减至一个值
class Syntax15 extends Component {

  render() {


	  // Define the callback function.
	  const appendCurrent = (previousValue, currentValue) => {
	    return previousValue + "::" + currentValue;
	  }

	  // Create an array.
	  const elements = ["abc", "def", 123, 456];

	  // Call the reduce method, which calls the callback function
	  // for each array element.
	  let result = elements.reduce(appendCurrent);

    return (
      <div>
      	<div>{result}</div>
      </div>
    );
  }
}

export default Syntax15;
