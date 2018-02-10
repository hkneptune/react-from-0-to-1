import React, {
    Component
} from 'react';

import {
    View,
    Text,
} from 'react-native';

export default class S4View extends Component {
  render() {
    return (
      <View>
        <Text />
        <Greeting name="bao" />
        <Greeting name="jianqiang" />        
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>{this.props.name}!</Text>
    );
  }
}