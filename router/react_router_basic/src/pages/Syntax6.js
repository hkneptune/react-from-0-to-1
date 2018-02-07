import React,{Component} from 'react';

class Syntax6 extends Component {
  render() {

  	var mySymbol = Symbol("bao");
    console.log(mySymbol);
    console.log(mySymbol.toString() + "a");

    var type = typeof(Symbol("bao"));
    console.log(type);
    
    return (
      <div>
      </div>
    );
  }
}

export default Syntax6;
