import React,{Component} from 'react';

import Singleton from './Singleton.js'

class DesignPatterns1 extends Component {

  constructor(props) {
    super(props);

	  let a1 = new Singleton();
	  let a2 = new Singleton();

	  console.log(a1.foo);	//bar
	  console.log(a1===a2);	//true
  }

  render() {

    return (
      <div>
      </div>
    );
  }
}

export default DesignPatterns1;