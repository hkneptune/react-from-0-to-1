import React, {Component} from 'react';

//MyClass的声明可以位于使用之后
class MyClass {
  //构造函数只能有一个
  // constructor(props) {
  //   super(props);
  //   this._address = "ncwjbvbkjn";
  // };

  constructor(address) {
    this._address = address;
  };

  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }

  static doSomething() {
    this._address = "123456qwe";
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
  }
}

class Syntax10 extends Component {

  constructor(props) {
    super(props);

    var myClass = new MyClass("abcd");
    console.log(myClass.address);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Syntax10;
