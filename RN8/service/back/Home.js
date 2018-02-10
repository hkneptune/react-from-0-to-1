import React, { Component } from 'react';
import {
  View,
  Navigator, 
  Text, 
  TouchableHighlight
} from 'react-native';

export default class HomePage extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

