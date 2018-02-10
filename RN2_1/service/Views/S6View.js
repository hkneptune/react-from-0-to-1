import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

//6）Symbols
export default class S6View extends Component {

  render() {
    var mySymbol = Symbol("bao");
    console.log(mySymbol);
    console.log(mySymbol.toString() + "a");

    var type = typeof(Symbol("bao"));
    console.log(type);

    return (
      <View>
        <Text>w</Text>
        <Text>a</Text>
        <Text>b</Text>
      </View>
      );
  }
}