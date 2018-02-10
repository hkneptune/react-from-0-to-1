import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

//reduce
//同时应用一个函数针对数组的两个值(从左到右)，以减至一个值
export default class S16View extends Component {

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
      <View>
        <Text>{result}</Text>
      </View>
    )
  }
}

class ChildCompontent extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    this.props.callbackParent('baobao');    
  }

  render() {
    return (   
      <View>     
        <Text></Text>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Text>Click Me</Text>
        </TouchableHighlight>             
      </View>     
      )
  }
}
