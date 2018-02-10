import React, {
    Component
} from 'react';

import {
    View,
    Text
} from 'react-native';

import MyScene from '../TrainDemo';

//内置  Greeting
//外置  MyScene

export default class S3View extends Component {
  render() {
    return (
      <View>
        <Greeting />        
        <MyScene />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>abcd</Text>
    );
  }
}