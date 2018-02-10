import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

export default class TrainDemo extends Component {
  static get defaultProps() {
    return {
      title: 'Train'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}

