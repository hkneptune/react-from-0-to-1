import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

 
export default class S11View extends Component {

  render() {
    var myClass = new MyClass("abcd");
    console.log(myClass.address);
//    console.log(myClass.doSomething());

    return (
      <View>
        <Text></Text>
      </View>
      );
  }
}

//MyClass的声明可以位于使用之后
class MyClass {
  //构造函数只能有一个
  // constructor() {
  //   super();
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